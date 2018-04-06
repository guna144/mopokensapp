import { MopoappPage } from './app.po';

describe('mopoapp App', () => {
  let page: MopoappPage;

  beforeEach(() => {
    page = new MopoappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
