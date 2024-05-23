const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async function (line) {
    const [companyId, channelId, skuCode, inv] = line.split(" ");
    await producer.send({
      topic: "inv-updates",
      messages: [
        {
          partition: companyId > 3000 ? 0 : 1,
          key: "inventory-update",
          value: JSON.stringify({ company: companyId, channelId:channelId, skuCode:skuCode, inv:inv }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();