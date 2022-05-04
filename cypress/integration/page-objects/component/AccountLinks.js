export class AccountLinks{
    summary(){
        cy.get('#account_summary_tab').click()
    }

    activity(){
        cy.get('#account_activity_tab').click()
    }

    funds(){
        cy.get('#transfer_funds_tab').click()
    }

    bills(){
        cy.get('#pay_bills_tab').click()
    }

    moneyMap(){
        cy.get('#money_map_tab').click()
    }

    statements(){
        cy.get('#online_statements_tab').click()
    }
}
