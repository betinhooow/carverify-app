/// <reference types="Cypress" />

import infoElements from '../elements/infoElements'
const infoElmts = new infoElements

class infoPage {
  // Acessa a aplicacao e busca o usuario
  searchUser(id) {
    cy.searchUser(id)
  }

  // Acessa as informacoes de uma aba
  AccessTab(tab) {
    cy.xpath(infoElmts.tabName(tab)).click()
  }

  // Validar mensagem de rodizio
  validateMsg(msg) {
    cy.get(infoElmts.validateMsg()).should('contain', `${msg}`)
  }

  // Valida se existe apenas aba de usuario
  validateUserOnly(tab) {
    cy.xpath(infoElmts.tabName(tab)).should('not.contain', `${tab}`)
  }

  // Valida se as informacoes estao preenchidas
  validateInfo(tab, info) {
    cy.xpath(infoElmts.tabName(tab)).click()
    cy.xpath(infoElmts.validaTabInfo(info)).should('contain', `${info}`)
  }

  // Valida se a primeira aba é de informações pessoais
  ValidateTabInfo(user) {
    cy.xpath(infoElmts.ValidateFirstTab()).should('contain', `${user}`)
  }


}

export default infoPage;
