---
title: controller
categories: [devops, kubernetes]
layout: devops/kubernetes
---

## Controller

### [레플리케이션 컨트롤러](https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/)
- replicaset 이 나오기 전 쿠버네티스 프로젝트의 초기부터 있었던 가장 기본적인 컨트롤러
- pod가 항상 실행되도록 유지하는 쿠버네티스 리소스
- 노드가 클러스터에서 사라지는 경우 해당 pod를 감지하고 대체 pod 생성
- 실행 중인 포드의 목록을 지속적으로 모니터링하고 지정한 숫자만큼의 pod가 항상 클러스터 안에서 실행되도록 관리


```sh
# 조회
$ kubectl get rc

# 정보 확인
$ kubectl describe rc [rc name]

# 설정 조회, 수정
$ kubectl edit rc [rc name]

# 레플리카 숫자 변경
$ kubectl scale rc [rc name] --replicas=[number]

# 삭제
$ kubectl delete rc [rc name]

# 파드는 남기고 삭제(드물게 쓰임)
$ kubectl delete rc [rc name] --cascade=false
```
```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: http-go
spec:
  replicas: 3
  selector:
    app: http-go
  template:
    metadata:
      name: http-go
      labels:
        app: http-go
    spec:
      containers:
      - name: http-go
        image: rayshoo/http-go
        ports:
        - containerPort: 8080
```