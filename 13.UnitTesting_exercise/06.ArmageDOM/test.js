const jsdom = require('jsdom-global')();
const $ = require('jquery');
const nuke = require('./script').nuke;
let expect = require('chai').expect;

describe('ArmageDOM Test', () => {
    let targetHTML;
    beforeEach(() => {
        document.body.innerHTML =
            `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
        targetHTML = $('#target')
    });
    it('should not change the html if the first selector is valid', function () {
        let selectorOne = 'invalid';
        let selector2 = $('inside')
        let oldHtml = targetHTML.html();
        nuke(selectorOne, selector2)
        expect(targetHTML.html()).to.be.equal(oldHtml)
    });
    it('should not change the html if the second selector is invalid.', function () {
        let selectorOne = $('.inside');
        let selectorTwo = 'invalid';
        let oldHtml = targetHTML.html();
        nuke(selectorOne, selectorTwo)
        expect(targetHTML.html()).to.be.equal(oldHtml)
    })
    it('should not change the html if both selectors are the same', function () {
        let selectorOne = $('.inside');
        let oldHtml = targetHTML.html();
        nuke(selectorOne, selectorOne)
        expect(targetHTML.html()).to.be.equal(oldHtml)
    });
    it('should not change the HTML if there is nothing to delete', function () {
        let selectorOne = $('.nested')
        let selectorTwo = $('.inside')
        let oldHtml = targetHTML.html();
        nuke(selectorOne,selectorTwo)
        expect(targetHTML.html()).to.equal(oldHtml)
    })
    it('should work properly if selectors are valid', function () {
        let selectorOne = $('.nested')
        let selectorTwo = $('.target')
        let oldHtml = targetHTML.html();
        nuke(selectorOne,selectorTwo)
        expect(targetHTML.html()).to.not.equal(oldHtml)
    })
});