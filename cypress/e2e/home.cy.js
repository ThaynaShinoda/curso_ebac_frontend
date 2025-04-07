describe('Teste de funcionalidades da agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar um  contato', () => {
    cy.get('input[type="text"]').type('Thayná Shinoda')
    cy.get('input[type="email"]').type('thayna-rs@hotmail.com')
    cy.get('input[type="tel"]').type('99 123456789')
    cy.get('button[type="submit"]').click()
    cy.contains('Thayná Shinoda').should('exist')
  })

  it('Deve editar o segundo contato da lista', () => {
    cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('Fulano')
    cy.get('[type="email"]').clear().type('fulano@gmail.com')
    cy.get('[type="tel"]').clear().type('99 111122222')
    cy.get('.alterar').click()
    cy.contains('Fulano').should('exist')
  })

  it('Deve excluir o último contato',() => {
    cy.get(':last-child > .sc-gueYoa > .delete').click()
    cy.get('h2').should('have.text', '3 contatos na agenda')
  })
})