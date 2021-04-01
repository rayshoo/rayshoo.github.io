---
title: ansible
categories: [os, windows]
layout: os/windows
---

## windows ansible
**windows os 에서 ansible controller의 기능은 수행 못하지만 client의 역할은 수행 가능하다.**<br/>
**windows 10 미만 버전에서는 [이 곳](https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html#host-requirements)을 참고**

### <span>1. </span>WinRM(Windows Remote Management)
WinRM을 켜야 사용 가능
```sh
# 상태 조회
> Get-Service -Name winrm

# 켜기
> $url = "https://raw.githubusercontent.com/ansible/ansible/devel/examples/scripts/ConfigureRemotingForAnsible.ps1"
$file = "$env:temp\ConfigureRemotingForAnsible.ps1"
(New-Object -TypeName System.Net.WebClient).DownloadFile($url, $file)
powershell.exe -ExecutionPolicy ByPass -File $file

# 상태 자세히 조회
> winrm enumerate winrm/config/Listener
```

### <span>2. </span> pywinrm
**controller 노드에서 pywinrm 설치**
```sh
$ sudo pip install pywinrm
$ sudo pip3 install pywinrm
```

**hosts파일 작성**
```sh
# hosts.ini
[win]
192.168.55.1 ansible_host=192.168.55.1

[win:vars]
ansible_user=[windows 계정]
ansible_password=[windows 계정 비밀번호]
ansible_connection=winrm
ansible_winrm_server_cert_validation=ignore

[windows:children]
win
```
```yaml
# ping.yaml
---
# This playbook uses the win_ping module to test connectivity to Windows hosts
- name: Ping
  hosts: windows

  tasks:
  - name: ping
    win_ping:

# whoami.yaml
---
# This playbook uses the win_ping module to test connectivity to Windows hosts
- name: Whoami
  hosts: windows
  tasks:
    - name: whoami
      win_shell: whoami
      register: me

    - debug:
        msg: "{{ me.stdout_lines }}"
```

**테스트**
```sh
# ping 대신 win_ping 모듈을 써야되는 것에 주의하자.
$ ansible -i hosts.ini win -m win_ping
$ ansible-playbook -i hosts.ini ping.yaml
$ ansible-playbook -i hosts.ini whoami.yaml
```

<!-- 
# WinRM listener 설정
> $selector_set = @{
Address = "*"
Transport = "HTTPS"
}

> $value_set = @{
CertificateThumbprint = "[winrm enumerate winrm/config/Listener 명령어를 입력했을 때 나오는 하단의 CertificateThumbprint 입력]"
}

> New-WSManInstance -ResourceURI "winrm/config/Listener" -SelectorSet $selector_set -ValueSet $value_set
``` -->