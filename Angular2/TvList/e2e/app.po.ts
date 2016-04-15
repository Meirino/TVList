export class TvListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tv-list-app p')).getText();
  }
}
