---
layout: page
---

<img src="/assets/images/docker.webp" alt="docker" width="15%" style="min-width:250px;">

<hr/>

**컨테이너 시스템 조회**
```sh
# 설치된 도커 정보 확인
$ docker info

# 이미지,컨테이너,볼륨,캐시 조회
$ docker system df

# 상태 조회
$ docker stats [name|id]

# 프로세스 아이디 조회
$ docker top [name|id]
```

**컨테이너 이미지**
```sh
# 이미지 찾기
$ docker search [name]

# 이미지 다운로드
$ docker pull [name]

# 이미지 조회
$ docker images

# 이미지 삭제
$ docker rmi [id]

# 이미지 컨테이너와 같이 삭제
$ docker rmi -f [id]

# 이미지 컨테이너와 같이 모두 삭제
$ docker rmi -f $(docker images -qa)
```

**컨테이너 조회**
```sh
# 실행중인 것만 조회
$ docker ps

# 종료된 것 포함 모두 조회
$ docker ps -a
```

**컨테이너 실행**

```sh
# -d : 백그라운드에서 실행
# -p : port-forward (여러개 사용 가능)
# -v : volume-mount
# --name : container name

# nginx 예시
$ docker run -d -p 80:80 --rm --name nginx -v /var/www:/usr/share/nginx/html:ro nginx

# mysql 예시
$ docker run \
--name [name] \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=root1! \
-v C:/mysql/:/var/lib/mysql \
-d mysql:5.7 \
--character-set-server=utf8mb4 \
--collation-server=utf8mb4_unicode_ci

# docker registry 예시
$ docker run -d --name [name|id] -p [port]:5000 registry

# 중지되 있는 컨테이너 시작
$ docker start [name|id]

# 실행중인 컨테이너 중지 후 재시작
$ docker restart [name|id]
```

**컨테이너 중지**

```sh
# 특정 컨테이너 중지
$ docker stop [id|name]

# 모든 컨테이너 중지
$ docker stop $(docker ps -qa)

# 실행중인 컨테이너 강제종료
$ docker stop $(docker ps -q -f status=running)
```

**컨테이너 삭제**
```sh
# 중지된 컨테이너 삭제
$ docker rm [id|name]

# 컨테이너 중지 후 삭제
$ docker rm $(docker stop [id|name])

# 모든 컨테이너 중지 후 삭제
$ docker rm $(docker stop $(docker ps -qa))

# 멈춰있는 컨테이너만 삭제
$ docker rm $(docker ps -q -f status=exited)
```

**컨테이너 접속**
```sh
# 컨테이너 생성 후 바로 접속
$ docker run -it --name [name] [image] sh
$ docker run -it --name [name] [image] /bin/bash

# 실행중인 컨테이너에 접속
$ docker exec -it [name|id] sh
$ docker exec -it [name|id] /bin/bash
```

**컨테이너에서 나가기**
```sh
# 백그라운드에서 돌아가는게 없으면 컨테이너가 중지될 수 있음
$ exit

# 현재 상태를 백그라운드에 놓고 잠시 나오기
ctrl+p ctrl+q
```

**실행중인 서버 포트 확인**
```sh
$ docker port [name|id]
```

**컨테이너 이름 바꾸기**
```sh
$ docker rename [original name] [new name]
```