describe('My first BC Test', () => {
	it('Logs in to BC with SuperUser privilege', () => {
		cy.visit('https://dev.bc-web.zbdev.org/')
		
		cy.url().should('include', 'applicationName=BC')

		cy.get('input[name = Username]').type('mattcoxsu') 
		
		cy.get('input[name = Password]').type('Lotus478!')
		
		cy.contains('Log in').click()
		
		cy.url().should('include', 'org/Home')
		
		cy.contains('Hello World!')
		
		//cy.pause()
		cy.wait(3000)
		
		cy.visit('https://dev.bc-web.zbdev.org/Home/superusertestpage')
		
		cy.contains('Admin:Enabled')
		
		cy.wait(3000)
		
		cy.contains('Logout').click()
	
	})
})
