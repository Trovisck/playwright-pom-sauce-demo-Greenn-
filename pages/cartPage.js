class CartPage {
    constructor(page) {
      this.page = page; // A página do navegador controlada pelo Playwright
      this.cartButton = '[data-test="shopping-cart-link"]'; // Botão para acessar o carrinho
      this.checkoutButton = '[data-test="checkout"]'; // Botão para iniciar o checkout
    }
  
    // Navega para a página do carrinho
    async goToCart() {
      await this.page.click(this.cartButton); // Clica no botão do carrinho
    }
  
    // Prossegue para a página de checkout
    async proceedToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  }
  
  module.exports = CartPage; // Exporta a classe para uso em outros arquivos
  