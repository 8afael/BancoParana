/* global Given, Then, And, When */
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import banco from '../page_objects/BancoParanaPage';

//Scenario: Teste do botao Azul
Given('acesso o site Challenging DOM', () => {
    banco.abrirSite();
})

When('estou na tela principal', () => {
    banco.verificarTela();
})

Then('clico no botao azul', () => {
    banco.clicarBotaoAzul();
})

//Scenario: Clique no botao Vermelho
Then('clico no botao vermelho', () => {
    banco.clicarBotaoVermelho();
})

//Scenario: Clique no botao Verde
Then('clico no botao verde', () => {
    banco.clicarBotaoVerde();
})

//Scenario: Clique no primeiro edit/delete
Then('clico no primeiro link edit', () => {
    banco.clicarPrimeiroEdit();
})

Then('clico no primeiro link delete', () => {
    banco.clicarPrimeiroDelete();
})

//Scenario: Clique no segundo edit/delete
Then('clico no segundo link edit', () => {
    banco.clicarSegundoEdit();
})

Then('clico no segundo link delete', () => {
    banco.clicarSegundoDelete();
})

//Scenario: Clique no terceiro edit/delete
Then('clico no terceiro link edit', () => {
    banco.clicarTerceiroEdit();
})

Then('clico no terceiro link delete', () => {
    banco.clicarTerceiroDelete();
})

//Scenario: Clique no quarto edit/delete
Then('clico no quarto link edit', () => {
    banco.clicarQuartoEdit();
})

Then('clico no quarto link delete', () => {
    banco.clicarQuartoDelete();
})

//Scenario: Clique no quinto edit/delete
Then('clico no quinto link edit', () => {
    banco.clicarQuintoEdit();
})

Then('clico no quinto link delete', () => {
    banco.clicarQuintoDelete();
})

//Scenario: Clique no sexto edit/delete
Then('clico no sexto link edit', () => {
    banco.clicarSextoEdit();
})

Then('clico no sexto link delete', () => {
    banco.clicarSextoDelete();
})

//Scenario: Clique no setimo edit/delete
Then('clico no setimo link edit', () => {
    banco.clicarSetimoEdit();
})

Then('clico no setimo link delete', () => {
    banco.clicarSetimoDelete();
})

//Scenario: Clique no oitavo edit/delete
Then('clico no oitavo link edit', () => {
    banco.clicarOitavoEdit();
})

Then('clico no oitavo link delete', () => {
    banco.clicarOitavoDelete();
})

//Scenario: Clique no nono edit/delete
Then('clico no nono link edit', () => {
    banco.clicarNonoEdit();
})

Then('clico no nono link delete', () => {
    banco.clicarNonoDelete();
})

//Scenario: Clique no decimo edit/delete
Then('clico no decimo link edit', () => {
    banco.clicarDecimoEdit();
})

Then('clico no decimo link delete', () => {
    banco.clicarDecimoDelete();
})