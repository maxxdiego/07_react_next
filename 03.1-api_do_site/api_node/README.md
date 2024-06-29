Instalar as dependências do projeto
### npm install

Criar a base de dados "api_site" no MySQL
Alterar as credênciais do banco de dados no arquivo ".env"
### CREATE DATABASE api_site CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte
### npm install --save-dev nodemon

Rodar o projeto usando o nodemon
### nodemon app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080

Sequelize-cli interface de linha de comando parar criar modelos, configurações e arquivos de migração para banco de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variáveis de ambiente
### npm install dotenv --save

Criar a migration da página home do conteúdo do topo
### npx sequelize-cli migration:generate --name create-homes-tops

Criar a migration para acrescentar a coluna imageTop
### npx sequelize-cli migration:generate --name alter-homes-tops-add-imagetop

Executar as migrations
### npx sequelize-cli db:migrate

Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:migrate:undo --name nome-da-migration

Criar a Models da página home do conteúdo do topo
### npx sequelize-cli model:generate --name HomesTops --attributes titleOneTop:string,titleTwoTop:string,titleThreeTop:string,linkBtnTop:string,textBtnTop:string,ImageTop:string

Criar seeders
### npx sequelize-cli seed:generate --name demo-homestopes

Executar seeders
### npx sequelize-cli db:seed:all

Executar uma única seeders
### npx sequelize-cli db:seed --seed nome-da-seed

Executar down - rollback - Permite que seja desfeita todas as seeders, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:seed:undo

Executar down - rollback - Permite que seja uma única seeders, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:seed:undo --seed nome-da-seed

Criar a Models da página home do conteúdo dos serviços
### npx sequelize-cli model:generate --name HomesServices --attributes servTitle:string,servIconOne:string,servTitleOne:string,servDescOne:string,servIconTwo:string,servTitleTwo:string,servDescTwo:string,servIconThree:string,servTitleThree:string,servDescThree:string