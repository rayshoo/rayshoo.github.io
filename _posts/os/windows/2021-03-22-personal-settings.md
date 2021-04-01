---
title: personal settings
categories: [os, windows]
layout: os/windows
---

## <span>1. </span>[wsl2](https://docs.microsoft.com/ko-kr/windows/wsl/install-win10)

### <span>1.1 </span>wsl, virtual machine 활성화

```sh
> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

> shutdown -r -t 0
```
### <span>1.2 </span>Linux 커널 업데이트 패키지 다운로드,설치<br/>
[x64 머신용 최신 WSL2 Linux 커널 업데이트 패키지](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)


### <span>1.3 </span>wsl2 업그레이드

```sh
# 기본값으로 설정
> wsl --set-default-version 2

#버전 조회
> wsl -l -v
> wsl --set-version [name] 2

# 재시작
> wsl -t [name]
```

### <span>1.4 </span>리눅스 배포판 설치<br/>
[https://aka.ms/wslstore](https://aka.ms/wslstore)

### <span>1.5 </span>공식 사이트<br/>
[https://docs.microsoft.com/en-us/windows/wsl/interop](https://docs.microsoft.com/en-us/windows/wsl/interop)<br/>
[https://docs.microsoft.com/en-us/windows/wsl/reference](https://docs.microsoft.com/en-us/windows/wsl/reference)

<hr/>

## <span>2. </span>[chocolatey](https://chocolatey.org/)
**관리자 권한 필요**
### <span>2.1 </span>chocolatey 패키지 매니저 설치
```sh
> Set-ExecutionPolicy Bypass -Scope Process -Force; `
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
### <span>2.2 </span>chocolatey 명령어
```sh
# 조회
> choco search [package]

# 설치
> choco install [package]
> choco install [package] -y

# 설치된 패키지 조회
> choco list --localonly
> choco list --localonly | findstr [package]
> choco list --localonly | grep [package]

# 삭제
> choco uninstall [package]
> choco uninstall [package] -y

# 업그레이드
> choco upgrade [package]
> choco upgrade [package] -y

# 모든 패키지 업그레이드
> choco upgrade all
> choco upgrade all -y

# 다운그레이드
> choco install -y [package] --version [version] --allow-downgrade
> choco install -y virtualbox --version 6.1.12 --allow-downgrade
```

### <span>2.3 </span>개인 패키지 목록
```sh
> choco install -y adb autohotkey awscli brave docker-desktop filezilla FiraCode firefox git heidisql `
mongodb nodejs-lts postman powershell-core python3 vim vscode ruby scrcpy slack virtualbox vagrant zoom `
googlechrome jenkins discord

> shutdown -r -t 0
```

<hr/>

## <span>3. </span>[windows terminal](https://docs.microsoft.com/ko-kr/windows/terminal/)

### <span>3.1 </span>windows terminall 다운로드,설치
[windows terminal install](https://www.microsoft.com/ko-kr/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)

### <span>3.2 </span>우클릭 레지스트리 등록

**powershell7 관리자 권한으로 실행**
```sh
> Set-ExecutionPolicy Bypass -Scope Process -Force; `
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/lextm/windowsterminal-shell/master/install.ps1'))
```

### <span>3.3 </span>배경,폰트 등 설정

[repository](https://github.com/rayshoo/windows_terminal_private_setting)
```sh
> git clone https://github.com/rayshoo/windows_terminal_private_setting.git
```

<hr/>

## <span>4. </span>cortana 삭제
```sh
> Get-AppxPackage -allusers Microsoft.549981C3F5F10 | Remove-AppxPackage
```

<hr/>

## <span>5. </span>BlueMail 설치

[BlueMail Download](https://bluemail.me/download/)

<hr/>

## <span>6. </span>NAVER whale 설치

[Naver whale Download](https://whale.naver.com/ko/download)

<hr/>

## <span>7. </span>SSH Server 설치
```sh
> choco install -y --package-parameters=/SSHServerFeature openssh
```
ssh-server를 설치했으므로 UNIX에서 windows로의 ssh 접속이 가능해진다.

<hr/>

## <span>8. </span> colemak layout 설치

### <span>8.1 </span> official colemak layout msi
[Caps_Lock_Unchanged](https://colemak.com/pub/windows/Colemak-1.1-Caps-Lock-Unchanged.zip)<br/>
**[Caps_Lock_Changed](https://skozl.com/s/colemak-caps.zip)**

### <span>8.2 </span> personal colemak layout macro
```sh
> git clone https://github.com/rayshoo/colemak_korean.git
```