/**
 * Just a demo test to show the styleguidist up and running in the cypress env.
 */
describe('Styleguidist - cypress demo', () => {
  describe('Index', () => {
    context('when navigating to the index page', () => {
      it('should render the h1 with the correct text', () => {
        cy.visit('');

        cy.get('#introduction').contains('Introduction');
      });
    });
  });

  describe('Functional Components', () => {
    context('when navigating to the functional components section', () => {
      it('should render the h1 with the correct text', () => {
        cy.visit('UI components');

        cy.get('#ui-components').contains('UI components');
      });
    });
  });
});
