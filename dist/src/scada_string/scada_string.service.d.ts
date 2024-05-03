import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StringEntity } from './scada_string.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaStringService implements OnModuleInit {
    private readonly stringRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(stringRepository: Repository<StringEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertString(stringData: any): Promise<any>;
    updateString(updateData: any): Promise<any>;
    deleteString(stringId: string): Promise<any>;
}
