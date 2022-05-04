export class FeedbackForm{

    load(){
        cy.visit('/feedback.html')
    }

    submitFeedback(){
        cy.fixture("feedback").then( data => {
            cy.get('#name').type(data.name)
            cy.get('#email').type(data.email)
            cy.get('#subject').type(data.subject)
            cy.get('#comment').type(data.description)
            cy.contains('Send Message').click()
        })
    }
}

export const onFeedbackForm = new FeedbackForm()