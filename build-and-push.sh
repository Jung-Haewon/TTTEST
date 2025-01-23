#!/bin/bash

# 멀티플랫폼 이미지 빌드 및 Docker Hub로 푸시
docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 \
  -t speedhaewon/nginx_react_test:latest . \
  --push