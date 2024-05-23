# KAFKA
KAFKA - Implementation with node js & kafka js

## Prerequisite

  - Node.js: [Download Node.JS](https://nodejs.org/en)  prefer nod 18.0 ot latest LTS version
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)
  - KafkaJs : [Install kafka Js](https://kafka.js.org/)

## Commands

### What is zookeeper?

ZooKeeper is a high-performance coordination service for distributed applications. It exposes common services - such as naming, configuration management, synchronization, and group services - in a simple interface so you don't have to write them from scratch. You can use it off-the-shelf to implement consensus, group management, leader election, and presence protocols. And you can build on it for your own, specific needs.

For more details [can refer here](https://zookeeper.apache.org/doc/current/index.html)

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

# File Structre will look like this:
Sure, here's the restructured and rephrased content for your GitHub README file:

---

### Running the Producer Script

1. **Navigate to Your Project Directory**:
   ```sh
   cd your_project_directory
   ```

2. **Execute the Producer Script**:
   ```sh
   node producer.js
   ```

3. **Provide Input When Prompted**:
   The script will prompt you to enter the following details:
   - `company_id`
   - `channel_id`
   - `sku_code`
   - `no_of_inventory`

   Enter the values in the following format:
   ```sh
   5432 365667 345 8
   ```

   Here's what each value represents:
   - `company_id`: `5432`
   - `channel_id`: `365667`
   - `sku_code`: `345`
   - `no_of_inventory`: `8`

   ![Prompt Example](path_to_your_image.png)

---

This structure makes the instructions clear and easy to follow, ensuring users understand what each step entails and what each input represents.

![image](https://github.com/TravelXML/KAFKA/assets/8361967/a07c9f9e-69b9-42d6-a2e6-787364608247)

## First Run Publisher

![image](https://github.com/TravelXML/KAFKA/assets/8361967/49018263-0863-4c64-9fb0-fd88b111f3bb)


## Then Run Consumer

![image](https://github.com/TravelXML/KAFKA/assets/8361967/cb738745-8263-4208-b6a5-bc54794bb973)

