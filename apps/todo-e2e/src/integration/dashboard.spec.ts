import { getManageCard, getViewCard } from '../support/dashboard.po';

describe('todo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display view card', () => {
    getViewCard().contains('View');
  });

  it('should display manage card', () => {
    getManageCard().contains('Manage');
  });

  it('should navigate to manage page when clicking manage card', () => {
    getManageCard().click();
    cy.url().should('include', '/manage');
  });

  it('should navigate to view page when clicking view card', () => {
    getViewCard().click();
    cy.url().should('include', '/view');
  });
});
