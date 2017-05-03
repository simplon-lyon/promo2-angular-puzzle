import { browser, element, by } from 'protractor';

export class Promo2AngularPuzzlePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
