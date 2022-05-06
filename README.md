# NLW Return – Mission Impulse: Stage 3/5

## 📄 Descrição

Projeto da _Trilha Impulse_ da 8ª Edição do NLW da _RocketSeat_.

## 🚀 Rodando a Aplicação

### 🔧 Configuração Inicial

- Requer **NodeJS**
- Requer **NPM**

### Web (Front-End)

```sh
cd web
npm install
npm run dev
```

**Agora é só olhar na _URL_**: <http://localhost:3000>

### Server (Back-End)

```sh
cd server
npm install
npm run dev
```

**Agora é só fazer um _POST_ no _Endpoint_**: <http://localhost:3333/feedbacks>

Dados de teste:

```json
{
 "type": "BUG",
 "comment": "Está tudo bugado!"
}
```

## 🔧 Tecnologias utilizadas

### 👨‍🚀 Stage 1/5

- **NodeJS LTS** (Usando NPM)
- **Vite** - Criação do Projeto já com React e TypeScript
- **Tailwind CSS** com Postconfig CSS - Estilização das páginas e componentes
- **Phosphor React** - Ícones configuráveis
- **Headless UI** - Automatização de Acessibilidade com Tailwind

### 👨‍🚀 Stage 2/5

- **Tailwind CSS Forms** - Estilização de formulários mais avançada
- **Tailwind CSS ScrollBar** - Estilização da barra lateral de rolagem
- **HTML2Canvas** - Tirar fotos da página atual (achei meio bugado 😅, mas funciona)

### 👨‍🚀 Stage 3/5

- **Express** - Host de servidor Backend
- TS Node / Dev - Compilação de código JavaScript para TypeScript (lembrar de usar uma versão mais recente nas configurações)
- **TypeScript** - JavaScript mas com recurso de tipagem de variáveis e objetos (ajuda também colocando barreiras de segurança)
- **Jest** - Uma parte super importante, realizar testes automatizados de cada parte da aplicação para dar segurança ao dar deploys, e garantir que uma funcionalidade não afeta a outra
- **SWC Jest** - Compilador mais rápido de JavaScript para o Jest (feito em Rust)
- **Cors** - Garantir que somente o Front End de um ou mais IPs conhecidos possam consumir o Back End da aplicação
- **NodeMailer** - Possibilita o envio de emails para fontes externas
- **Prisma** - Banco de dados ORM, que flexibiliza muito o uso do banco de dados e evita dor de cabeça caso faça migração de um BD para outro.

## 🔥 Conteúdos produzidos

- Feedback Widget (Web);
- Backend do Widget de Feedback

## 📝 Licença

Licenciado sob a licença do [MIT](LICENSE.txt).

> Feito com 💜 por Plínio
