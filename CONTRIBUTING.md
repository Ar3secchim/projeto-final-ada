# Como contribuir

Qualquer ajuda para melhorar o projeto é bem-vinda. Por isso, decidimos torná-lo open source.

## Iniciando

Certifique-se de estar na pasta raiz do projeto para executar:

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

## Mensagens de commit

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
t_.

Execute `npm run commit` para ter um painel interativo que permite seguir o padrão de commit de forma fácil.

Para saber mais, acesse esses links:

- [Especificação do Conventional Commit](https://www.conventionalcommits.org/)

## Documentação

A fim de facilitar a contribuição e evitar conflitos, modularizamos a documentação dos componentes, assim temos arquivos mais objetivos e enxutos.

## Pull requests (PRs)

Independentemente da contribuição a ser feita (no código-fonte e/ou na documentação), operacionalmente falando, temos 2 maneiras de fazer pull requests: localmente, via linha de comando, usando o Git em conjunto com o Github, ou online, editando arquivos diretamente no Github e solicitando um pull request posteriormente.

Se você estiver desenvolvendo localmente, precisará usar uma versão mais recente do NodeJS para usar o NPM ou YARN como gerenciador de pacotes. Para instalá-lo em seu sistema operacional, basta acessar o guia de instalação (<https://nodejs.org/en/download/>). Se você já o tiver instalado, prossiga.

## Edição local do código

Consiste em realizar o _fork_ do repositório raiz, cloná-lo, realizar a alteração e solicitar o PR para o repositório raiz.

### Realizando PRs para o repositório raiz

Para contribuir com o projeto, siga estes passos:

1. Faça um fork do repositório no GitHub clicando no botão "Fork".
2. Clone o repositório forkado para a sua máquina local usando o seguinte comando:

  ```bash
  git clone https://github.com/seu-usuario/projeto-final-ada.git
  ```

3. Navegue até o repositório clonado:

  ```
  cd projeto-final-ada
  ```

4. Crie uma nova branch para a sua funcionalidade ou correção:

  ```
  git checkout -b minha-branch
  ```

5. Faça as alterações necessárias e as commit:

  ```
  git commit -m 'feat: Minha nova funcionalidade'
  ```

6. Faça o push da sua branch para o repositório forkado:

  ```
  git push origin minha-branch
  ```

7. Abra a página do repositório original no GitHub e crie uma nova pull request a partir da sua branch.

8. Forneça um título descritivo e uma explicação para as suas alterações, então envie a pull request.

## Brach atualizada

Para manter a sua branch atualizada com as alterações do repositório original:

1. Adicione o repositório original como um remote:

  ```
  git remote add upstream https://github.com/seu-usuario/projeto-final-ada.git
  ```

2. Busque as últimas alterações do repositório original:

  ```
  git fetch upstream
  ```

3. Troque para a sua branch:

  ```
  git checkout minha-branch
  ```

4. Atualize a sua branch com as últimas alterações do repositório original:

  ```
  git rebase upstream/main
  ```

5. Faça o push da branch atualizada para o seu repositório forkado:

  ```
  git push origin minha-branch
  ```
