import { IsNotEmpty, MaxLength } from "class-validator"
import { Tema } from "src/tema/entities/tema.entity"
import { Usuario } from "src/usuario/entities/usuario.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"


@Entity ({ name: "tb_postagem" })
export class Postagem {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(120)
    @Column({length: 120, nullable: false})
    titulo: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false})
    conteudo: string

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    data_hora: string

    @ManyToOne(() => Tema, (Tema) => Tema.postagem)
    tema: Tema

    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem)
    usuario: Usuario
}