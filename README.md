# Desafio SomoS

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)   
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Descrição

Este projeto é uma API que simula um Trade Card Game com a temática do jogo MultiVersus da Warner.

## Pré-requisitos para rodar em sua máquina

Antes de iniciar, se assegure que possui os requisitos abaixo:

- IDE - (Por exemplo, o [Visual Studio Code](https://code.visualstudio.com/))
- [Node.js](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)
- Cadastro no [MongoDB Atlas](https://www.mongodb.com/atlas/database)



## Instalação/Execução

1. Instale o [Node.js](https://nodejs.org/en/). 

2. Faça o download como ZIP clicando neste [link](https://github.com/victorb26/battle-cards/archive/refs/heads/main.zip)) e extraia a pasta no local de sua preferência ou siga o passo a passo para fazer a instalação através do terminal do [Git:](https://git-scm.com/)

```bash
# Navegue pelos arquivos com o comando "cd" e faça o download do projeto

# Via SSH
$ git clone git@github.com:victorb26/battle-cards.git
# ou via HTTPS
$ git clone https://github.com/victorb26/battle-cards.git

# Após o download, entre na pasta raiz da aplicação
$ cd BATTLE-CARDS
```

3. O projeto armazena as cartas e resultados por meio do [MongoDB](https://www.mongodb.com/cloud). Edite o arquivo [configDB](https://github.com/victorb26/battle-cards/blob/main/src/data/configDB.js) de acordo com seus dados fornecidos pelo MongoDB Atlas.


4. Instale as dependências necessárias e inicie a aplicação.

```bash
$ npm install

$ npm start
```

## Rotas

---

- **GET**
    - **Consulte todas as cartas já cadastradas**
        - `'/characters'`
    - **Consulte uma carta específica através de seu id**
        - `'/character'` + /{insira aqui a id desejada}
    - **Consulte o resultado acumulado de vitórias de cada jogador**
        - `'/scores'`
- **POST**
    - **Insira um nova carta com um personagem**
        - `'/character'`
    - **Jogue contra outro Player**
        - `'/battle'`
    - **Reinicia a contagem de vitórias acumuladas**
        - `'/reset'`
- **PATCH**
    - **Atualize uma carta já existente, totalmente ou por atributo específico**
        - `'/character'` + /{insira aqui a id desejada}
- **DELETE**
    - **Remova uma carta específica através de seu id**
        - `'/character'` + /{insira aqui a id desejada}

*A operação GET pode ser acessada através de seu navegador de preferência, enquanto que para a utilização das demais é recomendado fazer as requisições por meio de API clients como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download).*



## SOBRE

Este projeto foi desenvolvido durante processo seletivo da [Iteris INC.](https://www.iteris.com.br/)

Autor: [Victor Barros](https://www.linkedin.com/in/victorjcbarros/)
