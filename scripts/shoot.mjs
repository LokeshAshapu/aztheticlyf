import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const URL = "http://localhost:3210/";
const out = "D:/aztheticlyf/.shots";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});

async function prepare(width) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 950, deviceScaleFactor: 0.6 });
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2500));
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.7;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    await new Promise((r) => setTimeout(r, 600));
    const style = document.createElement("style");
    style.textContent =
      ".reveal{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}" +
      ".anim-rise,.anim-mask{animation:none!important;opacity:1!important;clip-path:none!important}";
    document.head.appendChild(style);
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });
  return page;
}

async function clips(prefix, width, slice) {
  const page = await prepare(width);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const total = Math.ceil(height / slice);
  for (let i = 0; i < total; i++) {
    const y = i * slice;
    await page.screenshot({
      path: `${out}/${prefix}-${i + 1}.png`,
      clip: { x: 0, y, width, height: Math.min(slice, height - y) },
      captureBeyondViewport: true,
    });
  }
  console.log(prefix, "height", height, "slices", total);
  await page.close();
}

await clips("d", 1440, 2200);
await clips("m", 390, 1600);

await browser.close();
console.log("done");
