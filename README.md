# KAFKA
KAFKA - Implementation with node js & kafka js

## Prerequisite

  - Node.js: [Download Node.JS](https://nodejs.org/en)  prefer nod 18.0 ot latest LTS version
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)
  - KafkaJs : [install kafka Js](https://kafka.js.org/)

## Commands

### What is zookeeper?

ZooKeeper is a high-performance coordination service for distributed applications. It exposes common services - such as naming, configuration management, synchronization, and group services - in a simple interface so you don't have to write them from scratch. You can use it off-the-shelf to implement consensus, group management, leader election, and presence protocols. And you can build on it for your own, specific needs.

For more details [can refer here] (https://zookeeper.apache.org/doc/current/index.html)

- Start Zookeper Container and expose PORT `2181`.
```bash
docker run -p 2181:2181 zookeeper
```
- Start Kafka Container, expose PORT `9092` and setup ENV variables.
```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

# File structre will look like this

![image](https://github.com/TravelXML/KAFKA/assets/8361967/a07c9f9e-69b9-42d6-a2e6-787364608247)
