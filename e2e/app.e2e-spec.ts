import { ImBrokeHelpPage } from './app.po';

describe('im-broke-help App', function() {
  let page: ImBrokeHelpPage;

  beforeEach(() => {
    page = new ImBrokeHelpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
