const puppeteer = require("puppeteer");
import { checkPalindrome } from "./utils";

describe("checkPalindrome", () => {
  it("should be defined", () => {
    expect(checkPalindrome).toBeDefined();
  });
  it("checkPalindrome('level') should return a true.", () => {
    expect(checkPalindrome("level")).toBeTruthy();
  });
  it("checkPalindrome('madam!') should return true.", () => {
    expect(checkPalindrome("madam!")).toBeTruthy();
  });
  it("checkPalindrome('not a palindrome.') should return false.", () => {
    expect(checkPalindrome("not a palindrome.")).toBeFalsy();
  });
  it("checkPalindrome('A MAN, A PLAN, A CANAL. PANAMA') should return true.", () => {
    expect("checkPalindrome('A MAN, A PLAN, A CANAL. PANAMA')").toBeTruthy();
  });
  it("checkPalindrome('five|_/|four') should return false.", () => {
    expect(checkPalindrome("five|_/|four")).toBeFalsy();
  });
  it("checkPalindrome('0_0 (: /- :) 0-0') should return true.", () => {
    expect(checkPalindrome("0_0 (: /- :) 0-0")).toBeTruthy();
  });
});

describe("should check different elements", () => {
  it("should display 'level it's a palindrome'.", async () => {
    function delay(time) {
      return new Promise(function (resolve) {
        setTimeout(resolve, time);
      });
    }
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 60,
      defaultViewport: null,
      args: ["--start-maximized"],
    });
    const page = await browser.newPage();
    await page.setViewport({
      height: 800,
      width: 1920,
    });
    await page.goto("http://localhost:1234/");
    await page.click("input#input");
    await page.type("input#input", "level");
    const firstTest = await page.$eval(".result", (el) => el.textContent);
    expect(firstTest).toBe("level it's a palindrome");
    await delay(1000);

    await page.keyboard.down("Shift");
    await page.keyboard.down("Home");
    await page.keyboard.press("Backspace");
    await page.type("input#input", "Sorry...not a palindrome");
    const secondTest = await page.$eval(".result", (el) => el.textContent);
    expect(secondTest).toBe("Sorry...not a palindrome it's not a palindrome");
    await delay(1000);

    await page.keyboard.down("Shift");
    await page.keyboard.down("Home");
    await page.keyboard.press("Backspace");
    await page.type("input#input", "Was it a car or a cat I saw?");
    const thirdTest = await page.$eval(".result", (el) => el.textContent);
    expect(thirdTest).toBe("Was it a car or a cat I saw? it's a palindrome");
    await delay(3000);
    browser.close();
  }, 100000);
}, 100000);
