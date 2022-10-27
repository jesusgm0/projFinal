import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard"
import { DeleteResult } from "typeorm"
import { Postagem } from "../entities/postagem.entity"
import { PostagemService } from "../service/postagem.service"

@UseGuards(JwtAuthGuard)
@Controller('/postagens')
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) {}

    @Get()
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll()
    }

    @Get ('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number ): Promise<Postagem> {
        return this.postagemService.findById(id)
    }

    @Get ('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findByTitulo(titulo)
    }

    @Get ('/data/:data')
    @HttpCode(HttpStatus.OK)
    findByData_hora(@Param('data_hora') data_hora: string): Promise<Postagem[]> {
        return this.postagemService.findByData_hora(data_hora)
    }

    @Post ()
    @HttpCode(HttpStatus.OK)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem)
    }

    @Put ()
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem)
    }

    @Delete ('/:id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.postagemService.delete(id)
    }

}