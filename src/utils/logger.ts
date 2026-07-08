export class Logger {
  static info(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[INFO] [${timestamp}]: ${message}`);
  }
  static warn(message: string): void {
    const timestamp = new Date().toISOString();
    console.warn(`[WARN] [${timestamp}]: ${message}`);
  }
  static error(message: string): void {
    const timestamp = new Date().toISOString();
    console.error(`[ERROR] [${timestamp}]: ${message}`);
  }
  static debug(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[DEBUG] [${timestamp}]: ${message}`);
  }
}

