# Projeto Final Ada

[LINK DO DEPLOY DA APLICAÇÃO](https://dbw0yn60m3jq6.cloudfront.net)

Este é o README do projeto final Ada, que tem como objetivo explicar todo o projeto e fornecer comandos detalhados de como rodar o projeto em sua máquina local. Além disso, também descreveremos todo o processo de CI (Integração Contínua) e de build pela AWS.

## Descrição do Projeto

Este projeto tem como objetivo criar uma aplicação web moderna utilizando as tecnologias React, TypeScript e Yarn. A aplicação será um sistema de gerenciamento de tarefas, onde os usuários poderão criar, editar e excluir tarefas.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construir interfaces de usuário interativas.
- TypeScript: Superset do JavaScript que adiciona tipagem estática ao código.
- Yarn: Gerenciador de pacotes alternativo ao npm, com recursos adicionais de desempenho e segurança.

Esperamos que este projeto seja uma oportunidade de aprendizado e prática das tecnologias mencionadas, além de fornecer uma aplicação útil para os usuários finais.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina local:

1. Clone o repositório do projeto:

```
git clone https://github.com/seu-usuario/projeto-final-ada.git
```

2. Acesse o diretório do projeto:

```
cd projeto-final-ada
```

3. Instale as dependências do projeto:

```
npm install
yarn install
```

4. Inicie o servidor local:

```
yarn dev
```

5. Abra o navegador e acesse o seguinte endereço:

```
http://localhost:3000
```

## Processo de CI e Build pela AWS

O processo de CI e build pela AWS é automatizado e segue os seguintes passos:

1. O código é versionado no repositório do projeto no GitHub.

2. Quando um novo commit é feito no repositório, um webhook é acionado e dispara um evento para o serviço de Build da AWS.

3. O serviço de CI realizado pelo gitActions, executando os testes automatizados e gerando os artefatos necessários.

4. Após o build ser concluído com sucesso, o serviço de CodeBuild faz o deploy da aplicação em um ambiente de produção.

5. A aplicação está pronta para ser acessada pelos usuários.
