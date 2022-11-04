import { Controller, UseGuards, HttpCode, HttpStatus, Post, Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../service/auth.service";

@Controller('/auth')
@ApiTags('Usuario')
export class AuthController{
    constructor(private authService: AuthService){ }
    
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UsuarioLogin): Promise<any>{
    return this.authService.login(user)
    
    }
    
    
    }