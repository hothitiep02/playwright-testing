import { DateUtils } from './DateUtils';
export class RandomUtils {
  /**
   * Generates a random number between min (inclusive) and max (inclusive)
   */
  static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /**
   * Generates a random alphabetic string of a given length
   */
  static getRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  /**
   * Generates a unique employee name (first and last)
   * Example output: { firstName: 'Emp_Kldy', lastName: 'L_20260707' }
   */
  static getRandomEmployeeNames(): { firstName: string; lastName: string } {
    const randomSuffix = this.getRandomString(4);
    const currentDate = DateUtils.getCurrentDateYYYYMMDD();
    return {
      firstName: `Emp_${randomSuffix}`,
      lastName: `L_${currentDate}`
    };
  }
}