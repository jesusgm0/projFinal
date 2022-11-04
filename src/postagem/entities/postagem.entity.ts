import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MaxLength } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity"
import { Usuario } from "../../usuario/entities/usuario.entity"

@Entity({ name: "tb_postagens" })
export class Postagem {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @ApiProperty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false })
    titulo: string

    @IsNotEmpty()
    @ApiProperty()
    @Column({ length: 1000, nullable: false })
    conteudo: string

    @UpdateDateColumn()
    @ApiProperty()
    data: string


    @Column({nullable:true})
    @ApiProperty()
        curtida: number
    

    @ApiProperty({type:()=> Tema})
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty({type:()=> Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario 


}