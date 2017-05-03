import { Promo2AngularPuzzlePage } from './app.po';

describe('promo2-angular-puzzle App', () => {
  let page: Promo2AngularPuzzlePage;

  beforeEach(() => {
    page = new Promo2AngularPuzzlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
