import { TipsAppPage } from './app.po';

describe('tips-app App', () => {
  let page: TipsAppPage;

  beforeEach(() => {
    page = new TipsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
