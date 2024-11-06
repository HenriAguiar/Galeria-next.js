# Guia para Iniciantes: Iniciando o Projeto Minicurso FullStack Next.js

Este guia irá te ajudar a começar do zero com um projeto em Next.js, utilizando as ferramentas mais comuns. Siga os passos abaixo e logo você terá uma aplicação básica rodando em seu computador!

## Pré-requisitos

Antes de começar, você precisará dos seguintes itens instalados em sua máquina:

1. **Node.js** - Para instalar e gerenciar pacotes JavaScript e rodar o servidor local.
   - Você pode baixar e instalar o Node.js a partir deste link: [Node.js Download](https://nodejs.org/)
2. **npm** (Node Package Manager) - Já está incluído quando você instala o Node.js. É necessário para instalar as bibliotecas e dependências do projeto.
3. **Editor de Código** - Recomendamos o VS Code, que é um editor gratuito, amigável e cheio de funcionalidades úteis.
   - Baixe o VS Code aqui: [VS Code Download](https://code.visualstudio.com/)


## Clonando o Projeto Existente

Caso você queira colaborar em um projeto já existente, siga estes passos para clonar o repositório do Git:

1. **Clonar o Repositório**: Utilize o comando abaixo para clonar o repositório do Git:
   ```sh
   git clone https://github.com/HenriAguiar/Galeria-next.js.git
   ```

2. **Entrar na Pasta do Projeto Clonado**: Navegue até a pasta do projeto clonado.
   ```sh
   cd Galeria-next.js
   ```

3. **Instalar Dependências**: Instale as dependências do projeto utilizando o npm.
   ```sh
   npm install
   ```

4. **Rodar o Servidor Localmente**: Depois de instalar as dependências, você pode rodar o servidor localmente.
   ```sh
   npm run dev
   ```

## Criando o Projeto do Zero

Agora que você já possui os pré-requisitos instalados, siga estes passos para criar um projeto Next.js do zero:

1. **Atualizar o npm**: Atualize para a versão 10.9.0 do npm usando o seguinte comando:
   ```sh
   npm install -g npm@10.9.0
   ```

2. **Criar uma Aplicação Next.js**: Utilize o comando `npx` para criar uma nova aplicação com Next.js (versão 14.2.16).
   ```sh
   npx create-next-app@14.2.16
   ```

   - Durante o processo, você será solicitado a nomear seu projeto. Pode ser qualquer nome, mas neste exemplo vamos chamá-lo de **my-app**.

3. **Entrar na Pasta do Projeto**: Navegue até a pasta do projeto recém-criado.
   ```sh
   cd my-app
   ```

4. **Rodar o Servidor Localmente**: Use o comando abaixo para iniciar seu servidor de desenvolvimento.
   ```sh
   npm run dev
   ```

   - Após executar o comando, você poderá acessar seu projeto em [http://localhost:3000](http://localhost:3000).

## Dependências do Projeto

### Front-end

Para melhorar a interface do seu projeto, vamos instalar o **Flowbite**, uma biblioteca de componentes que facilita o desenvolvimento visual do seu projeto.

1. **Instalar o Flowbite e o Flowbite React**:
   ```sh
   npm i flowbite-react
   npm i flowbite
   ```

### Back-end

Para configurar o back-end do seu projeto, vamos adicionar o **Prisma**, um ORM que facilita a interação com o banco de dados.

1. **Instalar o Prisma**:
   ```sh
   npm install prisma --save-dev
   ```

2. **Executar o Prisma**:
   ```sh
   npx prisma
   ```

3. **Inicializar o Prisma**:
   ```sh
   npx prisma init
   ```

## Próximos Passos

Com esses passos iniciais, você já tem um projeto básico em Next.js rodando no seu computador. A partir daqui, você pode explorar a criação de páginas e componentes, conectar APIs, e personalizar sua aplicação de acordo com suas necessidades.

Observe a estrutura de pastas desse repositório e divirta-se codando! Não hesite em pesquisar ou pedir ajuda quando encontrar algum desafio! 🚀
