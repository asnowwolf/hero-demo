import { HeroesPage } from './app.po';

describe('heroes App', () => {
  let page: HeroesPage;

  beforeEach(() => {
    page = new HeroesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
