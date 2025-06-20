# Sauce Demo - Testes Automatizados com Playwright e POM 

Este repositório contém testes automatizados desenvolvidos com [Playwright](https://playwright.dev/) para o site [Sauce Demo](https://www.saucedemo.com/). Os testes seguem o padrão **Page Object Model (POM)** para facilitar a manutenção e a reutilização de código.

---

## **Pré-requisitos**

Antes de iniciar, garanta que você possui os seguintes itens instalados no seu ambiente:

- [Node.js](https://nodejs.org/) (versão 20 ou superior).
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/).

---

## **Passo 1: Clonar o Repositório**

1. Abra o terminal no seu computador.
2. Navegue até o diretório onde deseja salvar o projeto.
3. Execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/Trovisck/playwright-pom-sauce-demo.git
```
4. Após o download, entre na pasta do projeto:

```bash
cd playwright-pom-sauce-demo
```
---

## **Passo 2: Instalar as Dependências**

1. Certifique-se de estar na raiz do projeto.
2. Execute o comando abaixo para instalar todas as dependências do projeto e os navegadores necessários para o Playwright:

```bash
npm install
```
> **Nota**: A instalação dos navegadores é automatizada pelo script `postinstall` configurado no `package.json`. Caso enfrente problemas, você pode instalar manualmente com:

```bash
npx playwright install
```
---

## **🧪 Execução dos Testes**

- Para rodar todos os testes:

```bash
npx playwright test
```
- Para abrir o relatório:

```bash
npx playwright show-report
```
---

## 📂 Estrutura do Projeto

### **Pasta `pages/`**:
Contém classes que encapsulam ações e seletores de cada página da aplicação, organizadas no padrão Page Object Model. Cada arquivo representa uma página específica do site Sauce Demo:

- **`cartPage.js`**: Contém métodos e seletores relacionados à página do carrinho, como adicionar ou remover itens e verificar o total.
- **`checkoutPage.js`**: Inclui as funcionalidades do processo de checkout, como preenchimento de informações e finalização de compra.
- **`inventoryPage.js`**: Gerencia a página de inventário, com métodos para selecionar produtos, visualizar detalhes e ordenar itens.
- **`loginPage.js`**: Centraliza as ações e elementos da página de login, como preenchimento de credenciais e envio do formulário.
- **`productPage.js`**: Manipula a página de detalhes do produto, permitindo validações de descrição e preço.

### **Pasta `tests/`**:
Contém os arquivos de testes automatizados. Cada arquivo de teste cobre diferentes funcionalidades do site Sauce Demo. Exemplo:
- **`fullFlow.spec.js`**: Um fluxo completo que valida desde o login até a finalização de uma compra.

### **Outros Arquivos e Pastas**:
- **`playwright.config.js`**: Arquivo de configuração do Playwright, contendo informações sobre os navegadores, diretórios de saída e opções gerais de teste.
- **`test-results/`**: Diretório gerado automaticamente com os resultados das execuções de testes.
- **`.gitignore`**: Define quais arquivos ou pastas devem ser ignorados pelo Git.

---

## 📋 Fluxo Testado

- Login com credenciais válidas.
- Navegação e validação de detalhes do produto.
- Adição ao carrinho.
- Finalização do checkout.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)

---

## 📌 Notas

Este projeto foi desenvolvido como uma demonstração de conhecimento de automação para um teste técnico da empresa Greenn.


