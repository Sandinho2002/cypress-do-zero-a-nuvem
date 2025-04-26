Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.get('input[id="firstName"]').type('Sanderson')
  cy.get('input[id="lastName"]').type('Filho')
  cy.get('input[id="email"]').type('sandinhobarboza@gmail.com')
  cy.get('input[id="phone-checkbox"]').check()
  cy.get('input[id="phone"]').type('11988813553')
  cy.get('textarea[id="open-text-area"]').type('Santos Futebol Clube')
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit2', data => {
  cy.get('input[id="firstName"]').type(data.firstName)
  cy.get('input[id="lastName"]').type(data.lastName)
  cy.get('input[id="email"]').type(data.email)
  cy.get('input[id="phone-checkbox"]').click()
  cy.get('input[id="phone"]').type(data.phone)
  cy.get('textarea[id="open-text-area"]').type(data.text)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add(
  'fillMandatoryFieldsAndSubmit3',
  (
    data = {
      firstName: 'Edson',
      lastName: 'Arantes do Nascimento',
      email: 'reipeleeterno@santosfc.com.br',
      text: 'O maior da história',
      phone: '11903331010'
    }
  ) => {
    cy.get('input[id="firstName"]').type(data.firstName)
    cy.get('input[id="lastName"]').type(data.lastName)
    cy.get('input[id="email"]').type(data.email)
    cy.get('input[id="phone-checkbox"]').click()
    cy.get('input[id="phone"]').type(data.phone)
    cy.get('textarea[id="open-text-area"]').type(data.text)
    cy.get('button[type="submit"]').click()
  }
)

Cypress.Commands.add(
  'fillMandatoryFieldsAndSubmit4',
  (
    data = {
      firstName: 'Edson',
      lastName: 'Arantes do Nascimento',
      email: 'reipeleeterno@santosfc.com.br',
      text: 'O maior da história',
      phone: '11903331010'
    }
  ) => {
    cy.get('input[id="firstName"]').type(data.firstName)
    cy.get('input[id="lastName"]').type(data.lastName)
    cy.get('input[id="email"]').type(data.email)
    cy.get('input[id="phone-checkbox"]').click()
    cy.get('input[id="phone"]').type(data.phone)
    cy.get('textarea[id="open-text-area"]').type(data.text)
    cy.contains('button', 'Enviar').click()
  }
)
