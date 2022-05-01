# Teste de Automação Paraná Banco

Os testes estão divididos em duas pastas:
  - cypress: contém os testes de frontend
  - postman: contém os testes de API

## BDD - Cypress - Cucumber

Para execução dos testes de frontend será necessário:
  - Cypress + BDD + Cucumber instalado, como instalar e configurar: [aqui](https://medium.com/cwi-software/testes-automatizados-com-cypress-e-cucumber-d78b211da766)
  - BDD + Cucumber dicas: [aqui](http://shipit.resultadosdigitais.com.br/blog/estruturando-seu-projeto-com-bdd-e-cucumber/)

Após instalação, executar a automação através do seguinte comando:
  - cypress run --spec '<pasta local>\cypress\integration\BancoParana.feature'
  
## Testes de API
  
  Download e instalação Postman: [aqui](https://atendimento.tecnospeed.com.br/hc/pt-br/articles/360017143594-Como-instalar-e-utilizar-o-Postman-para-enviar-requisi%C3%A7%C3%B5es-HTTP)
  
  Importar o arquivo JsonPlace.postman_collection.json para o Postman
  
  Execução dos testes no Postman através da interface:
  ![Postman](https://miro.medium.com/max/1400/1*UlAsxHD5tCzuVXFSKliGKQ.png)
  
