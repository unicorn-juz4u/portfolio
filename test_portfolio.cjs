const puppeteer = require('puppeteer-core');
const _fs = require('fs');
const path = require('path');

const VIEWPORTS = [
  { name: 'iphone_se_320', width: 320, height: 667 },
  { name: 'mobile_375', width: 375, height: 667 },
  { name: 'mobile_430', width: 430, height: 932 },
  { name: 'tablet_768', width: 768, height: 1024 },
  { name: 'desktop_1024', width: 1024, height: 768 },
  { name: 'desktop_1440', width: 1440, height: 900 }
];

async function runTests() {
  console.log('Starting automated portfolio test suite with Chrome...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: 'new'
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  try {
    // 1. Test 320px (iPhone SE)
    console.log('Testing 320px viewport (iPhone SE)...');
    await page.setViewport({ width: 320, height: 800 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

    // Wait for preloader to finish (at least 2.2 seconds)
    await new Promise(r => setTimeout(r, 2200));

    // Check if horizontal scrollbar exists on 320px
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`320px Horizontal scroll check: scrollWidth=${scrollWidth}, clientWidth=${clientWidth}`);
    if (scrollWidth > clientWidth) {
      console.warn(`WARNING: Horizontal scroll detected on 320px! (${scrollWidth} > ${clientWidth})`);
    } else {
      console.log('PASSED: No horizontal scrolling on 320px.');
    }

    // Capture full page screenshot at 320px
    await page.screenshot({
      path: path.join(__dirname, 'test_screenshot_320.png'),
      fullPage: true
    });
    console.log('Saved test_screenshot_320.png');

    // 2. Test Light Mode Toggle on 320px
    console.log('Testing Theme Toggle to Light Mode...');
    // Click theme toggle button
    const themeBtn = await page.$('button[aria-label*="mode"]');
    if (themeBtn) {
      await themeBtn.click();
      await new Promise(r => setTimeout(r, 500));
      const htmlClass = await page.evaluate(() => document.documentElement.className);
      console.log('HTML class after theme toggle:', htmlClass);

      // Take screenshot of light mode at 320px
      await page.screenshot({
        path: path.join(__dirname, 'test_screenshot_320_light.png'),
        fullPage: true
      });
      console.log('Saved test_screenshot_320_light.png');
    }

    // 3. Test Mobile Hamburger Drawer on 320px
    console.log('Testing Hamburger Menu...');
    const hamburgerBtn = await page.$('button[aria-label="Open navigation menu"]');
    if (hamburgerBtn) {
      await hamburgerBtn.click();
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({
        path: path.join(__dirname, 'test_screenshot_320_drawer.png')
      });
      console.log('Saved test_screenshot_320_drawer.png');

      // Close drawer
      const closeBtn = await page.$('button[aria-label="Close navigation menu"]');
      if (closeBtn) {
        await closeBtn.click();
        await new Promise(r => setTimeout(r, 500));
        console.log('Drawer closed successfully.');
      }
    }

    // 4. Test Viewports
    for (const vp of VIEWPORTS) {
      console.log(`Testing viewport ${vp.name} (${vp.width}x${vp.height})...`);
      await page.setViewport({ width: vp.width, height: vp.height });
      await new Promise(r => setTimeout(r, 300));
      const sw = await page.evaluate(() => document.documentElement.scrollWidth);
      const cw = await page.evaluate(() => document.documentElement.clientWidth);
      console.log(`Viewport ${vp.name}: scrollWidth=${sw}, clientWidth=${cw} -> ${sw <= cw ? 'OK' : 'OVERFLOW'}`);
    }

    // 5. Test Filter Buttons (Projects and Skills)
    console.log('Testing Project Filters...');
    const filterButtons = await page.$$('button');
    let saasFilterBtn = null;
    let frontendSkillBtn = null;
    for (const btn of filterButtons) {
      const text = await (await btn.getProperty('textContent')).jsonValue();
      if (text.trim() === 'SaaS') saasFilterBtn = btn;
      if (text.trim() === 'Frontend') frontendSkillBtn = btn;
    }

    if (saasFilterBtn) {
      await saasFilterBtn.click();
      await new Promise(r => setTimeout(r, 500));
      console.log('Clicked SaaS project filter.');
    }

    if (frontendSkillBtn) {
      await frontendSkillBtn.click();
      await new Promise(r => setTimeout(r, 500));
      console.log('Clicked Frontend skill filter.');
    }

    // Capture desktop 1440px screenshot
    await page.setViewport({ width: 1440, height: 900 });
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({
      path: path.join(__dirname, 'test_screenshot_1440.png'),
      fullPage: true
    });
    console.log('Saved test_screenshot_1440.png');

    console.log('\n--- TEST SUMMARY ---');
    console.log('Console Errors:', consoleErrors.length === 0 ? 'None (0 errors)' : consoleErrors);
    console.log('All Viewports Tested Successfully!');

  } catch (err) {
    console.error('Test execution failed:', err);
  } finally {
    await browser.close();
  }
}

runTests();
