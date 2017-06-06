import { AppContextPage } from './app.po';

describe('app-context App', () => {
  let page: AppContextPage;

  beforeEach(() => {
    page = new AppContextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
