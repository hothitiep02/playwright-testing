import { initPage, page, testData } from '../setup';
import { Helper } from '../utils/helper';
import { printLog } from '../utils/logger';

/**
 * Base Test class extending Helper
 * Provides common test functionality and utilities
 */
export default class BaseTest extends Helper {

  constructor() {
    super();
  }

  public async init(link: string = testData.BASE_URL): Promise<void> {
    await initPage();
    await this.openHomePage(link);
  }

  public async openHomePage(link: string): Promise<void> {
    printLog(`Access to Customer Portal: ${link}`);
    await this.goto(link);
  }

  async goto(link: string): Promise<void> {
    await page.goto(link, { waitUntil: 'load' });
  }
}