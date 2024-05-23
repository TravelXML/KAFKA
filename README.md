# KAFKA 🚀
### KAFKA - Implementation with Node.js & Kafka.js - Order Management System / Inventory management System

## Case Study
### In a scenario where an order management system (oms) needs to publish stock or inventory of SKUs based on company ID and channel ID.

## Prerequisites

- Node.js: [Download Node.js](https://nodejs.org/en) (Preferably Node.js 18.0 or the latest LTS version)
- Docker: [Download Docker](https://www.docker.com)
- VSCode: [Download VSCode](https://code.visualstudio.com)
- KafkaJs: [Install Kafka.js](https://kafka.js.org/)

## Commands

### What is ZooKeeper?

[ZooKeeper](https://zookeeper.apache.org/doc/current/index.html) is a high-performance coordination service for distributed applications. It provides common services such as naming, configuration management, synchronization, and group services.

- Start ZooKeeper Container and expose PORT `2181`:
  ```bash
  docker run -p 2181:2181 zookeeper
  ```

- Start Kafka Container, expose PORT `9092`, and set up ENV variables:
  ```bash
  docker run -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka
  ```

## File Structure

![File Structure](https://github.com/TravelXML/KAFKA/assets/8361967/a07c9f9e-69b9-42d6-a2e6-787364608247)

## First Run Publisher

### Running the Producer Script

1. **Navigate to Your Project Directory**:
   ```sh
   cd your_project_directory
   ```

2. **Execute the Producer Script to publish your inventory by sku level**:
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

   - `company_id`: `5432`
   - `channel_id`: `365667`
   - `sku_code`: `345`
   - `no_of_inventory`: `8`

![Publisher Output](https://github.com/TravelXML/KAFKA/assets/8361967/49018263-0863-4c64-9fb0-fd88b111f3bb)

## Then Run Consumer

### Running the Consumer Script to consume the inventory updates by sku level

1. **Execute the Consumer Script with User Name**:
   ```sh
   node consumer.js user-1
   ```

2. **Output Example**:
   When you run the consumer script with a specific user name (`user-1` in this case), you will receive output similar to the following:

   ![Consumer Output](https://github.com/TravelXML/KAFKA/assets/8361967/cb738745-8263-4208-b6a5-bc54794bb973)

   - `user-1 is the group name`: Indicates the group name being used by the consumer script.
   - `Consumer connected`: Confirmation that the consumer is connected.
   - Log messages from the Kafka consumer library (Kafkajs) indicating the start of consumption and group membership details.
   - `user-1: [inv-updates]: PART:0: {"company":"5432","channelId":"365667","skuCode":"345","inv":"8"}`: Represents the consumed message, indicating the user, topic, partition, and message content.

```

This README file provides detailed instructions for setting up and running Kafka with Node.js, including explanations of ZooKeeper, Docker commands, file structure, and how to run both the producer and consumer scripts. It also includes visuals for better understanding and utilizes emojis to make the content more engaging.
