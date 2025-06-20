const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');

test('Fluxo completo: login, navegação, validação, checkout', async ({ page }) => {
  // Instancia as páginas necessárias para o fluxo
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Passo 1: Login
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Passo 2: Navegação e pesquisa
  await expect(inventoryPage.isInventoryVisible()).toBeTruthy();
  await inventoryPage.searchProduct('lohi'); // Ordena produtos por preço (baixo para alto)
  await inventoryPage.selectProduct('Sauce Labs Backpack');

  // Passo 3: Validação do produto
  await productPage.validateProductDetails(
    'Sauce Labs Backpack',
    '$29.99',
    'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
  );
  await productPage.addToCart();

  // Passo 4: Adicionar ao carrinho e prosseguir para checkout
  await cartPage.goToCart();
  await cartPage.proceedToCheckout();

  // Passo 5: Finalização do pedido
  await checkoutPage.fillCheckoutDetails('João', 'Silva', '12345');
  await checkoutPage.finishCheckout();

  console.log('Fluxo completo executado com sucesso!'); // Log para debug
});
