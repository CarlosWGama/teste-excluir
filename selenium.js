const { Builder, By } = require('selenium-webdriver');

async function teste() {
    //new Builder().forBrowser().build() = Cria uma conexão com o navegador
    //Outras opções para forBrowser: chrome|firefox|MicrosoftEdge
    const driver = await new Builder().forBrowser('MicrosoftEdge').build();

    //get = Abre a página no link informato
    await driver.get(__dirname+'/index.html');

    //Email
    await driver.findElement(By.id('email')).sendKeys('teste@teste.com');
    //Senha
    await driver.findElement(By.id('password')).sendKeys('123456');
    //Botão
    await driver.findElement(By.xpath('/html/body/form/p[4]/input')).click();
}

teste();
