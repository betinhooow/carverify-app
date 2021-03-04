/// <reference types="Cypress" />

import searchElements from '../elements/searchElements'
const searchElmts = new searchElements

class searchPage {
  // Acessa a aplicacao
  accessPage() {
    cy.visitUrl()
  }

  // Preenche o ID e pesquisa o usuario
  searchUser(id) {
    cy.get(searchElmts.inputId()).type(id)
    cy.get(searchElmts.btnSearch()).click()
  }

  // Valida se a busca foi realizada corretamente
  validateSearch(msg) {
    cy.get(searchElmts.validateSearch()).should('contain', `${msg}`)
  }

  // Valida se o campo de codigo esta preenchido
  inputMsg(error) {
    cy.get(searchElmts.msgError()).should('contain', `${error}`)
  }

  // Valida se o codigo existe
  existsMsg(error) {
    cy.get(searchElmts.msgError()).should('contain', `${error}`)
  }

}

export default searchPage;
