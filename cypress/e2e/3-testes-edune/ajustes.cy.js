/// <reference types="cypress"/>
describe('Teste Funcional de Login', () => {
  it('Teste de logout', () =>{
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