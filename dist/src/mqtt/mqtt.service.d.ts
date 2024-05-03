import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
export declare class MqttService implements OnModuleInit {
    private readonly configService;
    constructor(configService: ConfigService);
    private mqttClient;
    onModuleInit(): void;
    publish(topic: string, payload: string): string;
}
