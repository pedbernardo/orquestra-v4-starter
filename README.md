# Orquestra v4 Starter
Template de projeto para Orquestra v4

## Instalação

### npm

```sh
npm install

# ou

yarn install
```

⚠️ **Atenção!** Não esqueça de remover o link do repositório antes de começar

```sh
rm -r .git
```

## Utilização

### 💻 Desenvolvendo
```sh
npm run dev

# ou

yarn dev
```

> **Arquivos Estáticos:** os arquivos estáticos são salvos na pasta `public` e servidos (por padrão) no endereço 🔗 http://localhost:1234

> **API:** os endpoints da API mock são configurados através do arquivo `mocks/db.json` (por padrão) e servidos no endereço 🔗 http://localhost:1234/mocks/api

<br>

[Mais informações sobre configuração](#aaa)

<br>

### 📦 Criando Build
```sh
npm run build
```

> Os arquivos de build são salvos na pasta `dist` (por padrão)

<br>
<br>

## Tarefas
> todas as tarefas podem ser executadas individualmente diretamente pelo `gulp`.

### Form
Gera o arquivo de final formulário viabilizando o uso de `partials` com posthtml.

```sh
gulp form
```

### Mocks
Cria um servidor `express` através da lib `json-server` para geração de mocks da APIs e host de arquivos estáticos durante o desenvolvimento.

```sh
gulp mocks
```

### Scritps
Realiza o bundle dos arquivos `.js` utilizando `rollup`. Por padrão são utilizados dois bundles, um específico para o processo - `app.js` - e outro específico para o relatório - `report.js`.

```sh
gulp scripts
```

### Styles
Processa os arquivos `.css` utilizando `SASS`, somado ainda ao plugin de `autoprefixer`.

```sh
gulp styles
```

### Watch
Observa os arquivos pertinentes do diretório `src/` (por padrão) para execução automática das tarefas durante desenvolvimento. Também inicia um servidor de `live-reload` para atualização automática dos arquivos estáticos.

```sh
gulp watch
```

### Configurações

### Form
Parâmetro | Tipo   | Default                | Uso |
----------| ------ | ---------------------- |-----|
entry     | String | `./src/form/form.html` | arquivo `html` de entrada do formulário |
partials  | String | `./src/form/partials`  | diretório raiz para uso do `include` |
dest      | String | `./dist`               | diretório onde é salvo o arquivo de build |

### Mocks
Parâmetro | Tipo   | Default           | Uso |
----------| ------ | ----------------- |-----|
port      | Number | 1234              | porta utilizada para o servidor mock |
delayInMs | Number | 1000              | delay de resposta da API em milisegundos |
dbFile    | String | `./mocks/db.json` | arquivo do `json-server` para geração de endpoints e respostas |
path      | String | `/mocks/api`      | path raiz de resposta da API |

### Scripts
Parâmetro        | Tipo    | Default           | Uso |
-----------------| ------- | ----------------- |-----|
bundles          | Array   | ver abaixo        | entry files para bundles do rollup |
bundles[].input  | String  | ver abaixo        | arquivo `.js` de entrada |
bundles[].dest   | String  | ver abaixo        | arquivo `.js` de saída para **desenvolvimento** |
bundles[].build  | String  | ver abaixo        | arquivo `.js` de saída para **produção** |
output           | Object  | -                 | configuração de output do rollup, mais informações em: [rollupjs.org](https://rollupjs.org/guide/en/#configuration-files) |
output.sourcemap | Boolean | `true`            | habilita a geração de sourcemaps |
output.format    | String  | `cjs`             | formato de output (amd, cjs, es, iife, umd, system) |

### Styles
Parâmetro | Tipo   | Default                  | Uso |
----------| ------ | ------------------------ |-----|
entry     | String | `./src/styles/main.scss` | arquivo `.scss` de entrada |
output    | String | `styles.css`             | arquivo `.css` de saída para **desenvolvimento** |
build     | String | `styles.min.css`         | arquivo `.css` de saída para **produção** |
dest      | String | `./public` ou `./dist`   | diretório onde é salvo o arquivo de saída, varia conforme a variável `NODE_ENV` |

### Watch
Parâmetro | Tipo   | Default                  | Uso |
----------| ------ | ------------------------ |-----|
scripts   | String | `./src/js/**/*.js`       | glob watch para arquivos `.js` |
styles    | String | `./src/styles/**/*.scss` | glob watch para arquivos `.scss` |
form      | String | `./src/form/**/*.html`   | glob watch para arquivos `.html` |
