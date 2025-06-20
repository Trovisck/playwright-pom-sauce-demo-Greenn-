// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Diretório onde estão localizados os testes
  testDir: './tests',

  // Permite executar testes em paralelo para melhorar o desempenho
  fullyParallel: true,

  // Configurações globais para todos os testes
  use: {
    // Define a URL base para facilitar o uso de `page.goto('/')`
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',

    // Habilita o rastreamento de execução em caso de falha no primeiro retry
    trace: 'on-first-retry',

    headless: false,

    // Captura screenshots apenas em caso de falhas
    screenshot: 'only-on-failure',

    // Gera vídeos apenas em caso de falhas
    video: 'retain-on-failure',
  },

  // Configurações para relatórios
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  // Configurações específicas para diferentes projetos/navegadores
  projects: [
    {
      // Projeto para testes em desktop com Google Chrome
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      // Projeto para testes em dispositivos móveis (Pixel 5)
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
