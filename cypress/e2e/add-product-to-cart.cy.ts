describe('add product to cart', () => {
  it('should be able to navigate to the product page and add it to cart', () => {
    cy.visit('/')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.visit('/')
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
