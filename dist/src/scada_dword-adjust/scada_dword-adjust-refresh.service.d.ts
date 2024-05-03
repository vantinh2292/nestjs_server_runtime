import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaDWordAdjustRefreshService {
    private readonly socketGateway;
    constructor(socketGateway: SocketGateway);
    refreshData(): void;
}
