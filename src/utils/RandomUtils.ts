export class RandomUtils {
  static getUniqueName(prefix: string): string {
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:T.]/g, '').slice(0, 14);
    return `${prefix}_${timestamp}`;
  }

  static getRandomEmployeeId(): string {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }
}