const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "inv-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [inv-updates]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();