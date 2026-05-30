const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 1400, height: 860 } });
  const page = await ctx.newPage();
  const errs = [];
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });

  await page.goto('http://localhost:4242');
  await page.waitForSelector('.phoneme-token', { timeout: 10000 });

  // 1. IPA Atlas — consonants (default)
  await page.screenshot({ path: 'screenshot_atlas.png' });
  console.log('1. Atlas consonants captured');

  // 2. Click a phoneme to show description
  await page.click('.phoneme-token[data-id="r"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshot_phoneme.png' });
  console.log('2. Phoneme description captured');

  // 3. Select English — shows highlight + romanization overlay
  await page.click('.lang-btn[data-lang-id="english"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshot_english.png' });
  console.log('3. English atlas highlight captured');

  // 4. Language Phonology view — Standard Mittoli
  await page.click('.mode-btn[data-mode="phonology"]');
  await page.waitForTimeout(300);
  await page.click('.lang-btn[data-lang-id="mittoli"]');
  await page.waitForSelector('.phonology-view', { timeout: 5000 });
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshot_mittoli.png' });
  console.log('4. Standard Mittoli phonology captured');

  // 5. Moreshi
  await page.click('.lang-btn[data-lang-id="moreshi"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshot_moreshi.png' });
  console.log('5. Moreshi phonology captured');

  if (errs.length) console.log('JS ERRORS:', errs);
  await browser.close();
  console.log('All done.');
})();
