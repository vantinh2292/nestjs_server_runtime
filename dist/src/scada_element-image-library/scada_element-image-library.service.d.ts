import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { ElementImageLibraryEntity } from './scada_element-image-library.entity';
export declare class ScadaElementImageLibraryService implements OnModuleInit {
    private readonly bitDisplayImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(bitDisplayImageLibraryRepository: Repository<ElementImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    upload(data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
