describe('<Button>', () => {
  beforeEach(() => {
    cy.visit('Button');
    cy.window().then((win) => {
      cy.spy(win, 'testConsole').as('testConsole');
    });
  });

  context('when user clicks the button', () => {
    it('should run the onClick function', () => {
      cy.get('[data-cy="ui-button-1"] button').as('button');
      cy.get('@button').click();

      cy.get('@testConsole').should('be.calledOnce');
    });
  });
});
