import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ElementEntity } from './scada_element.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaElementService implements OnModuleInit {
    private readonly ElementRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(ElementRepository: Repository<ElementEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertElement(ElementData: any): Promise<any>;
    updateElement(updateData: any): Promise<any>;
    deleteElement(ElementId: string): Promise<any>;
}
