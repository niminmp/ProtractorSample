/**
 * Created by Nimin on 3/21/16.
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        /*browser.get('https://angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);*/

        browser.get("https://angularjs.org/");
        element(by.linkText("Develop")).click();
        element(by.linkText("Developer Guide")).click();
        var sampleElement = element(by.linkText("Services"));
        sampleElement.click();
        element(by.linkText("Dependency Injection in AngularJS")).click();
        element(by.linkText("resolves")).click();
        //var myElement = element(by.linkText("resolves"));
        //expect(myElement.getText()).to.eventually.equal('some text');
        element(by.linkText("registered controller")).click();
    });
});