---
title: port-forward
categories: [os, windows]
layout: os/windows
---

## [port-foward](https://docs.microsoft.com/ko-kr/windows-server/networking/technologies/netsh/netsh-interface-portproxy)
**관리자 권한 필요**

v4tov4 : ipv4 to ipv4<br/>
v6tov6 : ipv6 to ipv6

포트포워드 조회
```sh
> netsh interface portproxy show v4tov4
```

포트포워드 설정
```sh
> netsh interface portproxy add v4tov4 listenport=[host port] listenaddress=[host address] connectport=[guest port] connectaddress=[guest address]
> netsh interface portproxy add v4tov4 listenport=5058 listenaddress=0.0.0.0 connectport=22 connectaddress=192.168.55.50
```

포트포워드 해제
```sh
> netsh interface portproxy delete v4tov4 listenport=5058 listenaddress=0.0.0.0
```