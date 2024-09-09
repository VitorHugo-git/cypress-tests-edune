/// <reference types="cypress"/>
describe('Testes da plataforma Edune cursos', () => {

  it('Tentativa de Login válida, inserindo email e senha corretos', () =>{
    cy.visit("https://www.edunecursos.com.br/entrar")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testekultivi")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('img[src="https://cdn.edunecursos.com.br/themes/ava/assets/img/brand/new/logo_p.png"]').should('be.visible')
  }); 
  it('Tentativa de Login inválida, inserindo email errado e senha correta', () =>{
    cy.visit("https://www.edunecursos.com.br/entrar")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.co")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testekultivi")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('div.trigger_notify_content_desc').should('be.visible').and('have.text', 'O e-mail informado não está cadastrado')
  });
  it('Tentativa de Login inválida, inserindo email correto e senha errada', () =>{
    cy.visit("https://www.edunecursos.com.br/entrar")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testes")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('div.trigger_notify_content_desc').should('be.visible').and('have.text', 'A senha informada não confere')
  });
  it('Recuperar a senha esquecida', () =>{
    cy.visit("https://www.edunecursos.com.br/entrar")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testes")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('div.trigger_notify_content_desc').should('be.visible').and('have.text', 'A senha informada não confere')
    cy.get('.d-flex > .text-muted').click()
    cy.get('.form-control').type("testekultivi@gmail.com")
    cy.get('.btn').click()
    cy.get('.trigger_notify_content_desc').should('be.visible')
  });
  it('Acessar curso localizado em "Meus Cursos"', () =>{
    cy.visit("https://www.edunecursos.com.br/entrar")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testekultivi")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('img[src="https://cdn.edunecursos.com.br/themes/ava/assets/img/brand/new/logo_p.png"]').should('be.visible')
    cy.get('.flex > :nth-child(1) > .fas').click()
    cy.get('.plyr__poster').should('be.visible')
  });
  it('Navegar pelas aulas do curso escolhido anteriormente', () =>{
    cy.visit("https://www.edunecursos.com.br/entrar")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testekultivi")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('img[src="https://cdn.edunecursos.com.br/themes/ava/assets/img/brand/new/logo_p.png"]').should('be.visible')
    cy.get('.flex > :nth-child(1) > .fas').click()
    cy.get('.course_class_title > .no_desktop').should('contain', 'Vale a pena aprender Javascript?')
    cy.get('[title="Aula Aula 01 - Variáveis (Conceitos Básicos)"]').click()
    cy.get('.course_class_title > .no_desktop').should('contain', 'Aula 01 - Variáveis (Conceitos Básicos)')
    cy.get('[title="Aula Aula 02 -Constantes (Conceitos Básicos)"]').click()
    cy.get('.course_class_title > .no_desktop').should('contain', 'Aula 02 -Constantes (Conceitos Básicos)')
  });
  it('Abrir a aba nova-matricula e visualizar as opções de cursos', () =>{
    cy.visit("https://www.edunecursos.com.br/ava/nova-matricula")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testekultivi")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('img[src="https://cdn.edunecursos.com.br/themes/ava/assets/img/brand/new/logo_p.png"]').should('be.visible')
    cy.get('.flex > :nth-child(1) > .fas').click()
    cy.get('.course_class_title > .no_desktop').should('contain', 'Vale a pena aprender Javascript?')
    cy.get('.fa-bars').click()
    cy.get('a[href="https://www.edunecursos.com.br/ava/nova-matricula"]').click();
    cy.get('h2').should('be.visible')
  });
  it('Acessar uma aula e deixa-la mutada', () =>{
    cy.visit("https://www.edunecursos.com.br/entrar")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testekultivi")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('img[src="https://cdn.edunecursos.com.br/themes/ava/assets/img/brand/new/logo_p.png"]').should('be.visible')
    cy.get('.flex > :nth-child(1) > .fas').click()
    cy.get('.plyr__poster').should('be.visible')
    cy.get('.plyr__volume > .plyr__control').click()
    cy.get('button[data-plyr="mute"]').should('have.class', 'plyr__control--pressed');
  });
  it('Marcar aula como já assistida', () =>{
    cy.visit("https://www.edunecursos.com.br/entrar")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testekultivi")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('img[src="https://cdn.edunecursos.com.br/themes/ava/assets/img/brand/new/logo_p.png"]').should('be.visible')
    cy.get('.flex > :nth-child(1) > .fas').click()
    cy.get('.plyr__poster').should('be.visible')
    cy.get('.a').click()
  });
  it('Abrir a aba de ajuda e selecionar duas opções de ajudas', () =>{
    cy.visit("https://www.edunecursos.com.br/ava/nova-matricula")
    cy.get('.js__form-login > :nth-child(4) > .form-group > .form-control').type("testekultivi@gmail.com")
    cy.get('.js__form-login > :nth-child(5) > .form-group > .form-control').type("Testekultivi")
    cy.get('.js__form-login > .row > .col-md-4 > .btn').click()
    cy.get('img[src="https://cdn.edunecursos.com.br/themes/ava/assets/img/brand/new/logo_p.png"]').should('be.visible')
    cy.get('.flex > :nth-child(1) > .fas').click()
    cy.get('.course_class_title > .no_desktop').should('contain', 'Vale a pena aprender Javascript?')
    cy.get('.list__group > :nth-child(5)').click();
    cy.get('.dash_content_app_header > h2').should('contain', 'Pesquise sua dúvida aqui')
    cy.get(':nth-child(1) > .faq__question').click()
    cy.get(':nth-child(2) > .faq__question').click()
  });
});