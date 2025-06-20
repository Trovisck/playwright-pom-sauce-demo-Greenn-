class InventoryPage {
    constructor(page) {
      this.page = page; // A página do navegador controlada pelo Playwright
      this.inventoryList = '.inventory_list'; // Lista de produtos
      this.productTitle = '.inventory_item_name'; // Nome de um produto
      this.searchBar = '[data-test="product-sort-container"]'; // Filtro de ordenação
    }
  
    // Método para verificar se o inventário está visível
    async isInventoryVisible() {
      return await this.page.isVisible(this.inventoryList); // Retorna true se o inventário estiver visível
    }
  
    // Método para selecionar um produto pelo nome
    async selectProduct(productName) {
      await this.page.click(`text=${productName}`); // Seleciona o produto pelo texto do título
    }
  
    // Simula uma "pesquisa" usando o filtro de ordenação
    async searchProduct(option) {
      await this.page.selectOption(this.searchBar, option); // Ordena os produtos com a opção fornecida
    }
  }
  
  module.exports = InventoryPage; // Exporta a classe para uso em outros arquivos
  