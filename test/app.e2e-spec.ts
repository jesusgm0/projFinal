import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppModule } from '../src/app.module';

describe('Teste de Módulos Usuários e Auth (e2e)', () => {

  let token: any;
  let usuarioId: any;
  let app: INestApplication;


  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'rootroot',
        database: 'db_blogpessoal_test',
        autoLoadEntities: true,
        logging: false,
        dropSchema: true,
        synchronize: true,


      }), AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  afterAll(async () => {
    await app.close()
  })

  it('01-Deve Cadastrar Usuário', async () => {

    const resposta = await request(app.getHttpServer())
      .post('/usuarios/cadastrar')
      .send({
        nome: 'rootroot',
        usuario: 'root@root.com',
        senha: '26021997',
        foto: ''

      });
    expect(201)
    usuarioId = resposta.body.id


  })

  it('02-Deve Autentificar Usuário(Login)', async () => {
    const resposta = await request(app.getHttpServer())
      .post('/auth/logar')
      .send({
        usuario: 'root@root.com',
        senha: '26021997'
      });
    expect(200)

    token = resposta.body.token
  })

  it('03 - Não Deve Duplicar O Usuário', async () => {
    return request(app.getHttpServer())
      .post('/usuarios/cadastrar')
      .send({
        nome: 'Root',
        usuario: 'root@root.com',
        senha: '26021997',
        foto: ''

      })
      .expect(400)
  })

  it('04-Deve Listar todos os Usuários', async () => {
    return request(app.getHttpServer())
      .get('/usuarios/all')
      .set('Authorization', `${token}`)
      .send({})
      .expect(200)
  })

  it('05-Deve Atualizar o Usuário', async () => {

    return request(app.getHttpServer())
      .put('/usuarios/atualizar')
      .set('Authorization', ` ${token}`)
      .send({
        id: usuarioId,
        nome: 'Gabriele Cristina',
        usuario: 'geminiana@gmail.com',
        senha: 'rootroot',
        foto: ''
      })
      .expect(200)
      .then(resposta => {
        expect("Gabriele Cristina").toEqual(resposta.body.nome)
      })

  })
});