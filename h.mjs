import puppeteer from "./node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js";
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--hide-scrollbars"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 950, deviceScaleFactor: 1 });
await p.goto("http://localhost:3210/", { waitUntil: "domcontentloaded", timeout: 60000 });
await new Promise(r=>setTimeout(r,4000));
const info = await p.evaluate(()=> {
  const grid = document.querySelector("section > div.relative.mx-auto > div.grid");
  const cs = getComputedStyle(grid);
  return { display: cs.display, gridTemplateColumns: cs.gridTemplateColumns, heroH: document.querySelector("section").offsetHeight };
});
console.log(JSON.stringify(info));
await b.close();
