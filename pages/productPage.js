class ProductPage {
  constructor(page) {
    this.page = page;
    this.productTitle = '[data-test="inventory-item-name"]'; // Título do produto
    this.productDescription = '[data-test="inventory-item-desc"]'; // Descrição do produto
    this.productPrice = '[data-test="inventory-item-price"]'; // Preço do produto
    this.addToCartButton = '[data-test="add-to-cart"]'; // Botão de adicionar ao carrinho
  }

  // Valida os detalhes do produto
  async validateProductDetails(expectedTitle, expectedPrice, expectedDescription) {
    const title = (await this.page.textContent(this.productTitle)).trim();
    const price = (await this.page.textContent(this.productPrice)).trim();
    const description = (await this.page.textContent(this.productDescription)).trim();

    if (title !== expectedTitle || price !== expectedPrice || description !== expectedDescription) {
      throw new Error(`Os detalhes do produto não correspondem aos valores esperados!
      Esperado: Título="${expectedTitle}", Preço="${expectedPrice}", Descrição="${expectedDescription}"
      Capturado: Título="${title}", Preço="${price}", Descrição="${description}"`);
    }
  }

  // Adiciona o produto ao carrinho
  async addToCart() {
    await this.page.click(this.addToCartButton);
  }
}

module.exports = ProductPage;
