/// <reference types="cypress"/>

describe('tests backend', () => {

  // beforeEach(() => {
  //   cy.visitUrl()
  // })

  it('Test search', () => {
    cy.request({
      url: 'https://localhost:5001/api/People/1',
      method: 'GET',
    }).as('response')

    cy.get('@response').then(res => {
      expect(res.status).to.be.equal(200)
    })
  })

  it('Test user info', () => {
    cy.request({
      url: 'https://localhost:5001/api/People/1',
      method: 'GET',
    }).as('response')

    cy.get('@response').then(res => {
      expect(res.body.name).to.be.equal('Suelen')
      //console.log(res)
    })
  })

  it('Test car info', () => {
    cy.request({
      url: 'https://localhost:5001/api/People/1',
      method: 'GET',
    }).as('response')

    cy.get('@response').then(res => {
      expect(res.body.car[0].model).to.be.equal('Agile')
    })
  })

})

