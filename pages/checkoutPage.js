class CheckoutPage {
    constructor(page) {
      this.page = page; // A página do navegador controlada pelo Playwright
      this.firstNameInput = '[data-test="firstName"]'; // Campo do primeiro nome
      this.lastNameInput = '[data-test="lastName"]'; // Campo do sobrenome
      this.postalCodeInput = '[data-test="postalCode"]'; // Campo do código postal
      this.finishButton = '[data-test="continue"]'; // Botão de finalizar o pedido
    }
  
    // Preenche os dados de checkout
    async fillCheckoutDetails(firstName, lastName, postalCode) {
      await this.page.fill(this.firstNameInput, firstName);
      await this.page.fill(this.lastNameInput, lastName);
      await this.page.fill(this.postalCodeInput, postalCode);
    }
  
    // Finaliza o pedido
    async finishCheckout() {
      await this.page.click(this.finishButton);
    }
  }
  
  module.exports = CheckoutPage; // Exporta a classe para uso em outros arquivos
  