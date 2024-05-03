import { ScadaUserService } from './scada_user.service';
import { AuthDTO } from './dto';
export declare class ScadaUserController {
    private readonly scadaUserService;
    constructor(scadaUserService: ScadaUserService);
    getData(): Promise<import("src/scada_user/scada_user.entity").UserEntity[]>;
    signup(body: AuthDTO): Promise<{
        result: string;
        data: {};
        message: any;
    }>;
    signin(body: AuthDTO): Promise<{
        result: string;
        message: string;
        data: {
            _id: string;
            name: string;
            password: string;
            levelUser: number;
            token: string;
        };
    } | {
        result: string;
        message: string;
        data: {
            name: string;
            password: string;
            levelUser: number;
            token: {
                accessToken: string;
            };
        };
    }>;
    userCheck(body: any): Promise<{
        result: string;
        message: string;
        data: {
            name: any;
            levelUser: any;
        };
    } | {
        result: string;
        message: string;
        data: {
            name?: undefined;
            levelUser?: undefined;
        };
    }>;
    updateUser(requestBody: any): Promise<any>;
}
