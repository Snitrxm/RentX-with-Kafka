import { Kafka } from "kafkajs";

interface ISendMessage {
  message: string;
  topic: string;
}

export class KafkaAdpter {
  private kafka: Kafka | undefined;

  public async connect() {
    this.kafka = new Kafka({
      clientId: "my-app",
      brokers: ["kafka:9092"],
    });
    console.log(`Kafka connected successfully!`);
  }

  public async sendMessage({ message, topic }: ISendMessage) {
    if (this.kafka) {
      const producer = this.kafka.producer();

      await producer.connect();
      await producer.send({
        //topic: "test-topic",
        topic,
        messages: [{ value: message }],
      });

      console.log(`Message sent successfully!`);

      await producer.disconnect();
    }
  }
}
