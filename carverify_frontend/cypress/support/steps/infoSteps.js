/* global Given, Then, When, And */

import infoPage from '../pageobjects/infoPage'
const infoPg = new infoPage

Given("que eu esteja na pagina de pesquisa", () => {
  cy.visitUrl()
})

// Scenario Apresenta usuario sem carros
When("eu pesquisar um usuario sem carros", () => {
  infoPg.searchUser(3)
  infoPg.AccessTab('Bruno')
})

Then("apresenta apenas as informacoes do usuario", () => {
  infoPg.validateUserOnly('-')
  infoPg.validateInfo('Bruno', 'Bruno')
})

// Scenario Apresenta usuario com carros
When("eu pesquisar um usuario com carros", () => {
  infoPg.searchUser(1)
})

Then("deve apresentar as informacoes do veiculo", () => {
  infoPg.validateInfo('FRT-1236', 'Chevrolet')
})

And("confirmar se a mensagem de rodizio esta aparecendo", () => {
  infoPg.validateMsg('feira')
})

//Scenario Valida ordenacao das tabs
When("ao pesquisar um usuario com carros", () => {
  infoPg.searchUser(1)
})

And("quando eu clicar em uma placa", () => {
  infoPg.AccessTab('FRT-1236')
})

And("a aba de informacao deve estar em primeiro", () => {
  infoPg.AccessTab('FRT-1236')
  infoPg.ValidateTabInfo('Suelen')
})

