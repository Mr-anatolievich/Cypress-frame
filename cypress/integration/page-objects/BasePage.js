export class BasePage{
    pause(ms){
        cy.wait(ms)
    }

    logInfo(message){
        cy.log(message)
    }

    setMobileViewport(){
        cy.viewport('iphone-x')
    }

    setTableViewport(){
        cy.viewport('ipad-2')
    }

    setDesctopViewport(){
        cy.viewport('macbook-13')
    }

    setLargeDesctopViewport(){
        cy.viewport(1980, 1080)
    }
}