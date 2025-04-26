describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preencher os campos obrigatórios e envia o formulário aplicação', () => {
    //Declarando uma variável e dizendo quantas vezes ela será repetida na tela
    const longText = Cypress._.repeat('Eu amo o Santos FC', 10)

    //primeiro nome
    cy.get('input[id="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Sanderson')
    cy.get('@firstName').should('have.value', 'Sanderson')
    //último nome
    cy.get('input[id="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Filho')
    cy.get('@lastName').should('have.value', 'Filho')
    //email
    cy.get('input[id="email"]')
      //--> cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('sandinhobarboza@gmail.com')
    cy.get('@email').should('have.value', 'sandinhobarboza@gmail.com')
    //Como podemos te ajudar?
    cy.get('textarea[id="open-text-area"]')
      .as('ajuda')
      .should('be.visible')
      //Definindo o delay em 0 milisegundos (antes e por default, são 10)
      .type(longText, { delay: 0 })
    cy.get('@ajuda').should('have.value', longText)
    //Clicar em Enviar
    cy.get('button[type="submit"]').click()

    //Validar mensagem de sucesso
    cy.get('.success').should('be.visible')
  })

  it('Exibir mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    //Declarando uma variável e dizendo quantas vezes ela será repetida na tela
    const longText = Cypress._.repeat('Eu amo o Santos FC', 10)

    //primeiro nome
    cy.get('input[id="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Sanderson')
    cy.get('@firstName').should('have.value', 'Sanderson')
    //último nome
    cy.get('input[id="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Filho')
    cy.get('@lastName').should('have.value', 'Filho')

    //Faltando o e-mail ou e-mail incorreto
    //email
    cy.get('input[id="email"]')
      //--> cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('sandinhobarboza@')
    //cy.get('@email').should('have.value', 'sandinhobarboza@gmail.com')

    //Como podemos te ajudar?
    cy.get('textarea[id="open-text-area"]')
      .as('ajuda')
      .should('be.visible')
      //Definindo o delay em 0 milisegundos (antes e por default, são 10)
      .type(longText, { delay: 0 })
    cy.get('@ajuda').should('have.value', longText)
    //Clicar em Enviar
    cy.get('button[type="submit"]').click()

    //Validar mensagem de insucesso
    cy.get('.error').should('be.visible')
  })

  it('Validar inputs corretos para o campo "Telefone"', () => {
    //Declarando uma variável e dizendo quantas vezes ela será repetida na tela
    const longText = Cypress._.repeat('Eu amo o Santos FC', 10)

    //primeiro nome
    cy.get('input[id="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Sanderson')
    cy.get('@firstName').should('have.value', 'Sanderson')
    //último nome
    cy.get('input[id="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Filho')
    cy.get('@lastName').should('have.value', 'Filho')
    //email
    cy.get('input[id="email"]')
      //--> cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('sandinhobarboza@gmail.com')
    cy.get('@email').should('have.value', 'sandinhobarboza@gmail.com')
    //telefone
    cy.get('input[id="phone"]')
      .as('telefone')
      .should('be.visible')
      .type('abcde')
      .should('have.value', '')
    //Nesse caso, foram digitados caracteres normais, porém, o campo só aceita números e continua vazio.
    //Após isso, foi feita uma validação para verificar se o campo continua vazio, realmente.

    //Como podemos te ajudar?
    cy.get('textarea[id="open-text-area"]')
      .as('ajuda')
      .should('be.visible')
      //Definindo o delay em 0 milisegundos (antes e por default, são 10)
      .type(longText, { delay: 0 })
    cy.get('@ajuda').should('have.value', longText)
    //Clicar em Enviar
    cy.get('button[type="submit"]').click()

    //Validar mensagem de sucesso
    cy.get('.success').should('be.visible')
  })

  it('Exibir mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    //Declarando uma variável e dizendo quantas vezes ela será repetida na tela
    const longText = Cypress._.repeat('Eu amo o Santos FC', 10)

    //primeiro nome
    cy.get('input[id="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Sanderson')
    cy.get('@firstName').should('have.value', 'Sanderson')
    //último nome
    cy.get('input[id="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Filho')
    cy.get('@lastName').should('have.value', 'Filho')
    //email
    cy.get('input[id="email"]')
      //--> cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('sandinhobarboza@gmail.com')
    cy.get('@email').should('have.value', 'sandinhobarboza@gmail.com')
    //meio de contato preferencial
    cy.get('input[id="phone-checkbox"]')
      .as('telefone_checkbox')
      .should('be.visible')
      .click()
    //Como podemos te ajudar?
    cy.get('textarea[id="open-text-area"]')
      .as('ajuda')
      .should('be.visible')
      //Definindo o delay em 0 milisegundos (antes e por default, são 10)
      .type(longText, { delay: 0 })
    cy.get('@ajuda').should('have.value', longText)
    //Clicar em Enviar
    cy.get('button[type="submit"]').click()

    //Validar mensagem de insucesso
    cy.get('.error').should('be.visible')
  })

  it('Preencher e limpar os campos nome, sobrenome, email e telefone', () => {
    //Declarando uma variável e dizendo quantas vezes ela será repetida na tela
    const longText = Cypress._.repeat('Eu amo o Santos FC', 10)

    //primeiro nome
    cy.get('input[id="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Sanderson')
    cy.get('@firstName').should('have.value', 'Sanderson')
    cy.get('@firstName').clear().should('have.value', '')
    //último nome
    cy.get('input[id="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Filho')
    cy.get('@lastName').should('have.value', 'Filho')
    cy.get('@lastName').clear().should('have.value', '')
    //email
    cy.get('input[id="email"]')
      //--> cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('sandinhobarboza@gmail.com')
    cy.get('@email').should('have.value', 'sandinhobarboza@gmail.com')
    cy.get('@email').clear().should('have.value', '')
    //Como podemos te ajudar?
    cy.get('textarea[id="open-text-area"]')
      .as('ajuda')
      .should('be.visible')
      //Definindo o delay em 0 milisegundos (antes e por default, são 10)
      .type(longText, { delay: 0 })
    cy.get('@ajuda').should('have.value', longText)
    cy.get('@ajuda').clear().should('have.value', '')
    //Clicar em Enviar
    cy.get('button[type="submit"]').click()

    //Validar mensagem de insucesso
    cy.get('.error').should('be.visible')
  })

  it('Exibir mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    //Clicar em Enviar
    cy.get('button[type="submit"]').click()

    //Validar mensagem de insucesso
    cy.get('.error').should('be.visible')
  })

  it('Enviar o formulário com sucesso usando um comando customizado', () => {
    //Chamar o comando customizado
    cy.fillMandatoryFieldsAndSubmit()

    //Clicar em Enviar
    cy.get('button[type="submit"]').click()

    //Validar mensagem de sucesso
    cy.get('.success').should('be.visible')
  })

  it('Enviar o formulário com sucesso usando um comando customizado 2', () => {
    const data = {
      firstName: 'Sanderson',
      lastName: 'Barboza Filho',
      email: 'sandinhobarboza@gmail.com.br',
      text: 'Alvinegro da Vila Belmiro',
      phone: '11988813553'
    }

    //Chamar o comando customizado
    cy.fillMandatoryFieldsAndSubmit2(data)

    //Clicar em Enviar
    cy.get('button[type="submit"]').click()

    //Validar mensagem de sucesso
    cy.get('.success').should('be.visible')
  })

  it('Enviar o formulário com sucesso usando um comando customizado 3', () => {
    //const data = {
    //firstName: 'Sanderson',
    //lastName: 'Barboza Filho',
    //email: 'sandinhobarboza@gmail.com.br',
    //text: 'Alvinegro da Vila Belmiro',
    //phone: '11988813553'
    //}

    //Chamar o comando customizado
    cy.fillMandatoryFieldsAndSubmit3() //data)

    //Validar mensagem de sucesso
    cy.get('.success').should('be.visible')
  })

  it('Trocar seletores pelo "contains"', () => {
    //Visualizar pasta "commands"

    //Chamar o comando customizado
    cy.fillMandatoryFieldsAndSubmit4() //data)

    //Validar mensagem de sucesso
    cy.get('.success').should('be.visible')
  })

  it('Selecionar um produto (YouTube) por seu texto', () => {
    //escolher YouTube
    cy.get('select[id="product"]')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('Selecionar um produto (Mentoria) por seu valor (value)', () => {
    //escolher Mentoria
    cy.get('select[id="product"]')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('Selecionar um produto (Blog) por seu índice (index)', () => {
    //escolher Blog
    cy.get('select[id="product"]').select(1).should('have.value', 'blog')
  })

  it('Marcar o tipo de atendimento "Feedback"', () => {
    //escolher Feedback
    cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')
  })

  it('Marcar cada tipo de atendimento', () => {
    //escolher cada tipo de atendimento
    cy.get('input[type="radio"]').each(typeOfService => {
      cy.wrap(typeOfService).check().should('be.checked')
    })

    //cy.get('input[type="radio"][value="ajuda"]').check().should('be.checked')
    //cy.get('input[type="radio"][value="elogio"]').check().should('be.checked')
    //cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')
  })

  it('Marcar ambos checkboxes, depois desmarca o último', () => {
    //Marcar ambos e depois desmarcar o último
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })

  it('Selecionar um arquivo da pasta fixtures', () => {
    cy.get('input[id="file-upload"]')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('Selecionar um arquivo simulando um drag-and-drop', () => {
    //Fazer o mesmo teste anterior, porém, arrastando o arquivo até o campo de anexagem
    cy.get('input[id="file-upload"]')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('Selecionar um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[id="file-upload"]')
      .selectFile('@sampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('Verificar que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  it('Acessar a página da política de privacidade removendo o target e então clicando no link', () => {
    //Quando o target é deletado, a nova página abre na mesma aba
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  })

  it('Testar a página da política de privacidade de forma independente', () => {
    //Quando o target é deletado, a nova página abre na mesma aba
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')

    cy.contains(
      'p',
      'Não salvamos dados submetidos no formulário da aplicação CAC TAT.'
    ).should('be.visible')

    cy.contains('p', 'Talking About Testing').should('be.visible')
  })
})
