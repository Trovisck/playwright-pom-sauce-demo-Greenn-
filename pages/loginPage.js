class LoginPage {
    constructor(page) {
      this.page = page; // A página do navegador controlada pelo Playwright
      this.usernameInput = '#user-name'; // Campo de nome de usuário
      this.passwordInput = '#password'; // Campo de senha
      this.loginButton = '#login-button'; // Botão para realizar login
    }
  
    // Método para navegar até a página de login
    async navigate() {
      await this.page.goto('https://www.saucedemo.com/'); // URL da página de login
    }
  
    // Método para realizar login com credenciais fornecidas
    async login(username, password) {
      await this.page.fill(this.usernameInput, username); // Preenche o nome de usuário
      await this.page.fill(this.passwordInput, password); // Preenche a senha
      await this.page.click(this.loginButton); // Clica no botão de login
    }
  }
  
  module.exports = LoginPage; // Exporta a classe para uso em outros arquivos
  