const { Builder, By } = require('selenium-webdriver');

//Caso esteja lento, aumentar o tempo
//jest.setTimeout(60000);

describe('login', () => {
  
    test('logado com sucesso', async () => {
        const driver = await new Builder().forBrowser('chrome').usingServer('http://host.docker.internal:4444/wd/hub').build();
        
        await driver.get('http://host.docker.internal:80/');
        //Login
        await driver.findElement(By.id('email')).sendKeys('teste@teste.com');
        await driver.findElement(By.id('password')).sendKeys('123456');
        await driver.findElement(By.xpath('/html/body/form/p[4]/input')).click();
        const url = await driver.getCurrentUrl();
        const endpoint = url.split('/').pop();
        expect(endpoint).toEqual('welcome.html')
        await driver.quit();
    })

    test('falha ao logar', async () => {
        const driver = await new Builder().forBrowser('chrome').usingServer('http://host.docker.internal:4444/wd/hub').build();

        await driver.get('http://host.docker.internal:80/');
        //Login
        await driver.findElement(By.id('email')).sendKeys('errado@teste.com');
        await driver.findElement(By.id('password')).sendKeys('123456');
        await driver.findElement(By.xpath('/html/body/form/p[4]/input')).click();
    
        const error = await driver.findElement(By.id('error'));
        expect(error).toBeDefined()
    
        await driver.quit();
    })
})
