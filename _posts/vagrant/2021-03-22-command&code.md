---
title: "command & code"
categories: [devops, vagrant]
layout: vagrant
---

기본 유저, 패스워드<br/>
user : vagrant<br/>
password : vagrant<br/>
<br/>
user: root<br/>
password: vagrant<br/>

기본적으로 호스트(vagrant ssh-config)의 공개키를 생성한 가상머신에서 가지고 있기때문에(/home/vagrant/.ssh/authorized_keys) 이를 삭제하지 않도록 한다.

<hr/>
**초기 세팅**

```sh
$ vagrant init
```

<hr/>

**박스 관련 명령어**

```sh
# 조회
$ vagrant box list

# 추가
$ vagrant box add bento/ubuntu-18.04

# 이름 지정 추가
$ vagrant box add centos_private  https://github.com/tommy-muehle/puppet-vagrant-boxes/releases/download/1.0.0/centos-6.6-x86_64.box

# 삭제
$ vagrant box remove [name]
```
<hr/>

**가상머신 관련 명령어**

```sh
# 조회
$ vagrant status [name|id]
$ vagrant global-status

# 실행 (실행 시 박스가 없으면 자동으로 다운로드 받는다)
$ vagrant up [name|id] [--color]

# 접속
$ vagrant ssh [name|id] [--extra_ssh_args]

# 종료
$ vagrant halt [name|id]
$ vagrant halting [name|id]

# 세팅 적용 (ex: 네트워크 설정)
$ vagrant reload [name|id]

# 프로비저닝 적용
$ vagrant provision [vm-name] [--color]

# 삭제
$ vagrant destroy
$ vagrant destory --force
$ vagrant destory --parallel

# 현재 실행 상태 저장,종료(디스크와 램을 사용하고 있는 상태로 종료)
$ vagrant suspend [name|id]

# suspend 해제 (vagrant up 역시 가능)
$ vagrant resume [name|id]

# ssh-config 조회(network forwarded port 설정되있어야함)
$ vagrant ssh-config

# 스냅샷 조회
$ vagrant snapshot list

# 스냅샷 저장
$ vagrant snapshot save [vm-name] [name]

# 스냅샷 복원
$ vagrant snapshot restore [vm-name] [name]

# 스냅샷 삭제
$ vagrant snapshot delete [vm-name] [name]
```
<hr/>
**Share**

```sh
# Vagrantfile 공유
$ vagrant login vagrant share
```
<hr/>
**Providers**

```sh
# default provider 변경
$ vagrant up –provider=vmware_fusion vagrant up –provider=aws
```
<hr/>
**Networking**

```rb
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise32"
  config.vm.provision :shell, path: "bootstrap.sh"
  # 호스트의 4567 를 게스트 80으로 연결
  # 브라우져에서 127.0.0.1:4567 연결하면
  # 호스트의 apache 80번 포트로 연결된다.
  config.vm.network :forwarded_port, host: 4567, guest: 80
end
```
<hr/>
**Plugin**

```sh
$ vagrant plugin install
$ vagrant plugin license
$ vagrant plugin list
$ vagrant plugin uninstall
$ vagrant plugin update
```
<hr/>
**Etc**

```sh
# 최신 업데이트 된 박스들 조회
$ vagrant box outdated

# 박스 삭제(address)
$ vagrant remove <address>

# 현재 실행중인 virtualbox 를 재사용 가능한 box로 만든다
$ vagrant package

$ vagrant update
$ vagrant repackage
```

<hr/>

**참고 사항**<br/>
export VAGRANT_FORCE_COLOR=true 하거나 환경변수 등록하면 --color 안해도 적용됨