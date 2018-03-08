// example test from https://github.com/xfumihiro/jest-puppeteer-example/blob/master/__tests__/test1.js

describe('/ (Home Page)', () => {
  it('should load without error', async () => {
    await page.goto('https://google.com');
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('google');
  });
});
