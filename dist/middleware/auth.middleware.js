"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("passport");
const jwt_strategy_1 = require("../strategy/jwt.strategy");
let AuthMiddleware = class AuthMiddleware {
    constructor(passport, jwtStrategy) {
        this.passport = passport;
        this.jwtStrategy = jwtStrategy;
        this.init();
    }
    init() {
        this.passport.use(this.jwtStrategy);
    }
    use(req, res, next) {
        this.passport.authenticate('authentication', { session: false }, (err, user) => {
            if (err || !user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.user = user;
            next();
        })(req, res, next);
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof passport_1.Passport !== "undefined" && passport_1.Passport) === "function" ? _a : Object, jwt_strategy_1.JwtStrategy])
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map