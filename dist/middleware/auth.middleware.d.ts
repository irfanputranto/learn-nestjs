import { NestMiddleware } from '@nestjs/common';
import { Passport } from 'passport';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly passport;
    private readonly jwtStrategy;
    constructor(passport: Passport, jwtStrategy: JwtStrategy);
    init(): void;
    use(req: any, res: any, next: () => void): void;
}
