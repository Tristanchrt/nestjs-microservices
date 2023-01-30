# Nestjs microservice

## Basic app for testing nestjs microservices with kafka

- https://nestjs.com/
- https://kafka.apache.org/

## Schema

![Alt text](schema.png?raw=true "Title")


## How to use 
> Run post service and kafak
```
cd post-service/
docker-compose up post-service
```
> Run auth-service 
```
cd auth-service/
docker-compose up
```
> Run comment service
```
cd comment-service/
docker-compose up
```