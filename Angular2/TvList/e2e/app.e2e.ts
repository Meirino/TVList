import { TvListPage } from './app.po';

describe('tv-list App', function() {
  let page: TvListPage;

  beforeEach(() => {
    page = new TvListPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tv-list Works!');
  });
});
