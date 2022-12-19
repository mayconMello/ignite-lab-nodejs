import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['fleet-aphid-6942-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZmxlZXQtYXBoaWQtNjk0MiQXxegF7RKoY7399Obq4yZVv-24Jam0h9tTYqq8Jdc',
          password:
            'FefcWlRVuCAmFbyoy6kpT6s6p0bs7SSHoTQStT-ZrKCJwUByDfxCnV8x36qrLU01b51qXg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
