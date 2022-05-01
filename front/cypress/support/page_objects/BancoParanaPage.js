/// <reference types="Cypress" />

import { should } from "chai";


// elementos
const telaPrincipal = 'h3'
const btnAzul = '[class="button"]'
const btnVermelho = '[class="button alert"]'
const btnVerde = '[class="button success"]'
const txtBtnAzul = '[class="button"]'
const primeiroEdit = 'table tbody > tr'


//#2ba6cb

class BancoParanaPage {

    static abrirSite () {
        cy.visit("https://the-internet.herokuapp.com/challenging_dom")
    }

    static verificarTela () {
        cy.get(telaPrincipal)
        .should('be.visible')
        .contains("Challenging DOM")
    }

    static clicarBotaoAzul () {
        cy.get(btnAzul)
        .should('have.css', 'background-color', 'rgb(43, 166, 203)' )
        .click()
        cy.log("Botao Azul foi clicado") 
    }

    static clicarBotaoVermelho () {
        cy.get(btnVermelho)
        .should('have.css', 'background-color', 'rgb(198, 15, 19)' )
        .click()
        cy.log("Botao Vermelho foi clicado") 
    }

    static clicarBotaoVerde () {
        cy.get(btnVerde)
        .should('have.css', 'background-color', 'rgb(93, 164, 35)' )
        .click()
        cy.log("Botao Verde foi clicado") 
    }

    static clicarPrimeiroEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum0')
        .should('include.text', 'Phaedrum0')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Primeiro EDIT clicado')
    }

    static clicarPrimeiroDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum0')
        .should('include.text', 'Phaedrum0')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Primeiro DELETE clicado')
    } 

    static clicarSegundoEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum1')
        .should('include.text', 'Phaedrum1')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Segundo EDIT clicado')
    }

    static clicarSegundoDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum1')
        .should('include.text', 'Phaedrum1')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Segundo DELETE clicado')
    } 

    static clicarTerceiroEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum2')
        .should('include.text', 'Phaedrum2')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Terceiro EDIT clicado')
    }

    static clicarTerceiroDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum2')
        .should('include.text', 'Phaedrum2')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Terceiro DELETE clicado')
    } 

    static clicarQuartoEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum3')
        .should('include.text', 'Phaedrum3')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Quarto EDIT clicado')
    }

    static clicarQuartoDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum3')
        .should('include.text', 'Phaedrum3')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Quarto DELETE clicado')
    } 

    static clicarQuintoEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum4')
        .should('include.text', 'Phaedrum4')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Quinto EDIT clicado')
    }

    static clicarQuintoDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum4')
        .should('include.text', 'Phaedrum4')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Quinto DELETE clicado')
    } 

    static clicarSextoEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum5')
        .should('include.text', 'Phaedrum5')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Sexto EDIT clicado')
    }

    static clicarSextoDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum5')
        .should('include.text', 'Phaedrum5')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Sexto DELETE clicado')
    } 

    static clicarSetimoEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum6')
        .should('include.text', 'Phaedrum6')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Setimo EDIT clicado')
    }

    static clicarSetimoDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum6')
        .should('include.text', 'Phaedrum6')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Setimo DELETE clicado')
    } 

    static clicarOitavoEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum7')
        .should('include.text', 'Phaedrum7')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Oitavo EDIT clicado')
    }

    static clicarOitavoDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum7')
        .should('include.text', 'Phaedrum7')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Oitavo DELETE clicado')
    } 

    static clicarNonoEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum8')
        .should('include.text', 'Phaedrum8')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Nono EDIT clicado')
    }

    static clicarNonoDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum8')
        .should('include.text', 'Phaedrum8')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Nono DELETE clicado')
    } 

    static clicarDecimoEdit () {
        cy.get(primeiroEdit)
        .contains('Phaedrum9')
        .should('include.text', 'Phaedrum9')
        .parents('tr')
        .find('a')
        .contains('edit')
        .click()
        cy.log('Decimo EDIT clicado')
    }

    static clicarDecimoDelete () {
        cy.get(primeiroEdit)
        .contains('Phaedrum9')
        .should('include.text', 'Phaedrum9')
        .parents('tr')
        .find('a')
        .contains('delete')
        .click()
        cy.log('Decimo DELETE clicado')
    } 

}

export default BancoParanaPage;