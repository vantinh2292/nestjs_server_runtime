import { AuthDTO } from './dto';
import { Repository } from 'typeorm';
import { UserEntity } from './scada_user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class ScadaUserService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService);
    getData(): Promise<UserEntity[]>;
    signup(userDTO: AuthDTO): Promise<{
        result: string;
        data: {};
        message: any;
    }>;
    signin(userDTO: AuthDTO): Promise<{
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
    signJwtToken(userId: string, name: string, levelUser: number): Promise<{
        accessToken: string;
    }>;
    verify(info: string): Promise<{
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
    updateUser(updateData: any): Promise<any>;
}
