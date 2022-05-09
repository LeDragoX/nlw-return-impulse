<div align="center">

# 👨🏻‍🚀 NLW Return – Mission Impulse: Stage 5/5 👩🏻‍🚀

</div>

## 📄 Descrição

Projeto da _Trilha Impulse_ da 8ª Edição do NLW da _RocketSeat_.

## 🚀 Rodando a Aplicação

### 🔧 Configuração Inicial

- Requer **NodeJS LTS**
- Requer **NPM**
- Requer **PostgreSQL (Server)**

### 🕸 _Web_ (_Front-End_)

<details>
  <summary>Mostrar imagens</summary>
  <div align="center">
    <img src="./assets/app-web.gif" width="75%" />
  </div>
</details>

```sh
cd web
npm install
npm run dev
```

**Agora é só olhar na _URL_**: <http://localhost:3000>

### 🗄 _Server_ (_Back-End_)

<details>
  <summary>Mostrar imagens</summary>
  <div align="center">

#### Teste no Endpoint

<img src="./assets/app-backend.gif" width="75%" />

#### Teste de Email

<img src="./assets/app-backend-email.gif" width="75%" />

  </div>
</details>

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

### 📱 _Mobile_ (_Front-End_)

<details>
  <summary>Mostrar imagens</summary>
  <div align="center">
    <img src="./assets/app-mobile.gif" width="75%" />
  </div>
</details>

```sh
npm install -g yarn
yarn install -g expo-cli # ou sudo yarn install -g expo-cli
cd mobile
expo install # ou yarn install
expo start # Se der erro use expo start --clear
```

**OBS**: Infelizmente eu não consegui saber se deu certo mesmo com o servidor backend rodando na porta 3333

```
[AxiosError: Network Error]
```

## 🔧 Tecnologias utilizadas

### 👨🏻‍🚀 Stage 1/5

- **NodeJS LTS** (Usando NPM)
- **Vite** - Criação do Projeto já com React e TypeScript
- **Tailwind CSS** com Postconfig CSS - Estilização das páginas e componentes
- **Phosphor React** - Ícones configuráveis
- **Headless UI** - Automatização de Acessibilidade com Tailwind

### 👩🏻‍🚀 Stage 2/5

- **Tailwind CSS Forms** - Estilização de formulários mais avançada
- **Tailwind CSS ScrollBar** - Estilização da barra lateral de rolagem
- **HTML2Canvas** - Tirar fotos da página atual (achei meio bugado 😅, mas funciona)

### 👨🏻‍🚀 Stage 3/5

- **Express** - Host de servidor Backend
- **TS Node / Dev** - Compilação de código JavaScript para TypeScript (lembrar de usar uma versão mais recente nas configurações)
- **TypeScript** - JavaScript mas com recurso de tipagem de variáveis e objetos (ajuda também colocando barreiras de segurança)
- **Jest** - Uma parte super importante, realizar testes automatizados de cada parte da aplicação para dar segurança ao dar deploys, e garantir que uma funcionalidade não afeta a outra
- **SWC Jest** - Compilador mais rápido de JavaScript para o Jest (feito em Rust)
- **Cors** - Garantir que somente o Front End de um ou mais IPs conhecidos possam consumir o Back End da aplicação
- **NodeMailer** - Possibilita o envio de emails para fontes externas
- **Prisma** - Banco de dados ORM, que flexibiliza muito o uso do banco de dados e evita dor de cabeça caso faça migração de um BD para outro.

### 👩🏻‍🚀 Stage 4/5

- **Expo** - Inicializador do Projeto Mobile com React Native em TypeScript
- **React Native** - Framework para desenvolvimento mobile (Android, iOS)
- **Fonte Inter para Expo** - Fonte do Google integrada ao App
- **Bottom Sheet** - Menu de baixo deslizável e configurável
- **Phosphor React Native** - Biblioteca de ícones customizáveis utilizado na Web para React Native
- **Axios** - Utilizado para integrar a API do BackEnd
- **Expo App Loading** - Tela de carregando do Expo
- **Expo File System** - Acessa ao sistema de arquivos do celular
- **Expo Status Bar** - Customiza a barra de status do telefone
- **React Native Gesture Handler** - Compreende gestos dentro da aplicação
- **React Native iPhone X Helper** - Conserta o visual torto do iPhone, na parte inferior
- **React Native Reanimated** - Adiciona mais animações ao React Native
- **React Native View Shot** - Ferramenta de capturar tela do celular

### 👨🏻‍🚀 Stage 5/5

#### 🚀 Deploy

##### _Vercel_ (_Front-end_)

- <https://nlw-return-impulse-ledragox.vercel.app/>

##### _Railway_ (_Back-end_ com banco de dados _PostgreSQL_ e envio de e-mail para _Mailtrap_)

- <https://nlw-return-impulse-production-aee0.up.railway.app/>

## 🔥 Conteúdos produzidos

- Versão **Web** do _Feedback Widget_;
- **Backend** do _Feedback Widget_;
- Versão **Mobile** do _Feedback Widget_;

## 📝 Licença

Licenciado sob a licença do [MIT](LICENSE.txt).

> Feito com 💜 por Plínio
