import {Page,Locator,expect,BrowserContext,} from '@playwright/test';
import { Helper } from '../utils/helper';
import { page, browserContext, testData } from '../setup';

class BaseSelector {}
  export class BasePage extends Helper {
    readonly page: Page;
    readonly browserContext: BrowserContext;
    readonly selector: BaseSelector;
    testData: any;

    constructor() {
      super();
      this.page = page;
      this.browserContext = browserContext;
      this.selector = new BaseSelector();
      this.testData = testData;
    }
    getLocator(selector: string): Locator {
      return this.page.locator(selector);
    }
    getLocators(selector: string): Locator {
      return this.page.locator(selector);
    }
  }