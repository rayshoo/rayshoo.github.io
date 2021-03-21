---
layout: page
---

<img src="/assets/images/windows.png" alt="windows" width="25%" style="min-width:300px;">

<hr/>

## <span>1. </span>[wsl2](https://docs.microsoft.com/ko-kr/windows/wsl/install-win10), [windows terminal](https://docs.microsoft.com/ko-kr/windows/terminal/)

### <span>1.1 </span>wsl, virtual machine 활성화

```sh
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

shutdown -r -t 0
```
### <span>1.2 </span>리눅스 배포판 설치<br/>
https://aka.ms/wslstore

### <span>1.3 </span>wsl2 업그레이드

```sh
기본값으로 설정
wsl --set-default-version 2

버전 조회
wsl -l -v
wsl --set-version [name] 2

재시작
wsl -t [name]
```

<span>1.4 </span>공식 사이트<br/>
[https://docs.microsoft.com/en-us/windows/wsl/interop](https://docs.microsoft.com/en-us/windows/wsl/interop)<br/>
[https://docs.microsoft.com/en-us/windows/wsl/reference](https://docs.microsoft.com/en-us/windows/wsl/reference)

<hr/>

## <span>2. </span>[chocolatey](https://chocolatey.org/)
**관리자 권한 필요**
### <span>2.1 </span>chocolatey 패키지 매니저 설치
```sh
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
### <span>2.2 </span>chocolatey 명령어
```sh
# 조회
choco search [package]

# 설치
choco install [package]
choco install [package] -y

# 설치된 패키지 조회
choco list --localonly
choco list --localonly | findstr [package]
choco list --localonly | grep [package]

# 삭제
choco uninstall [package]
choco uninstall [package] -y

# 업그레이드
choco upgrade [package]
choco upgrade [package] -y

# 모든 패키지 업그레이드
choco upgrade all
choco upgrade all -y
```

### <span>2.3 </span>개인 패키지
```sh
choco install -y adb autohotkey awscli brave docker-desktop filezilla FiraCode firefox git heidisql \
mongodb nodejs-lts postman powershell-core python3 thunderbird vim vscode ruby scrcpy slack discord \
virtualbox jenkins zoom
```

<hr/>

## <span>3. </span>[port-foward](https://docs.microsoft.com/ko-kr/windows-server/networking/technologies/netsh/netsh-interface-portproxy)
**관리자 권한 필요**

v4tov4 : ipv4 to ipv4
v6tov6 : ipv6 to ipv6

포트포워드 조회
```sh
netsh interface portproxy show v4tov4
```

포트포워드 설정
```sh
netsh interface portproxy add v4tov4 listenport=5058 listenaddress=0.0.0.0 connectport=22 connectaddress=192.168.55.50
```

포트포워드 해제
```sh
netsh interface portproxy delete v4tov4 listenport=5058 listenaddress=0.0.0.0
```

<hr/>

## <span>4. </span>ansible 사용하기 위한 winrm 켜기
```sh
# 상태 조회
Get-Service -Name winrm

# 켜기
$url = "https://raw.githubusercontent.com/ansible/ansible/devel/examples/scripts/ConfigureRemotingForAnsible.ps1"
$file = "$env:temp\ConfigureRemotingForAnsible.ps1"
(New-Object -TypeName System.Net.WebClient).DownloadFile($url, $file)
powershell.exe -ExecutionPolicy ByPass -File $file

# 상태 자세히 조회
winrm enumerate winrm/config/Listener
```

<hr/>

## <span>5. </span>cortana 삭제
```sh
Get-AppxPackage -allusers Microsoft.549981C3F5F10 | Remove-AppxPackage
```