import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MaxLength } from "class-validator"
import { Postagem } from "src/postagem/entities/postagem.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity ({name: "tb_tema"})
export class Tema {

@PrimaryGeneratedColumn ()
@ApiProperty()
id: number 

@IsNotEmpty ()
@ApiProperty()
@MaxLength (255)
@Column ({length: 255, nullable: false})
educacao: string

@IsNotEmpty ()
@ApiProperty()
@MaxLength (255)
@Column ({length: 255, nullable: false})
serie: string

@ApiProperty({type: ()=> Postagem})
@OneToMany(() => Postagem, (Postagem) => Postagem.tema)
postagem: Postagem[]
}
