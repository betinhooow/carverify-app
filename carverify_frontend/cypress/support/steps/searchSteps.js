/* global Given, Then, When */

import searchPage from '../pageobjects/searchPage'
const searchPg = new searchPage

Given("que eu esteja na aplicacao", () => {
  searchPg.accessPage()
})

//Scenario Validar pesquisa de usuario e seus carros
When("pesquisar um usuario", () => {
  searchPg.searchUser(1)
})

Then("confirmar se a pesquisa foi realizada", () => {
  searchPg.validateSearch('Bem')
})

//Scenario Pesquisa um codigo inexistente
When("pesquisar um codigo que não existe", () => {
  searchPg.searchUser('aghag')
})

Then("deve apresentar a mensagem de codigo nao encontrado", () => {
  searchPg.existsMsg('Código não encontrado =(')
})

//Scenario Pesquisa sem um codigo
When("pesquisar sem preencher o codigo", () => {
  searchPg.searchUser('{CONTROL}')
})

Then("deve aprensentar a mensagem de preenchimento", () => {
  searchPg.inputMsg('O Id é obrigatório')
})
