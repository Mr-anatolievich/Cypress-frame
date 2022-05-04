const { onFeedbackForm } = require("../page-objects/page/FeedBack")


describe('Testing FeedbackForm Using Fixtures', () => {
    
    before(() => {
        onFeedbackForm.load()
    })
    it('should submit feedbackform', () => {
        
        onFeedbackForm.submitFeedback()
    })
})