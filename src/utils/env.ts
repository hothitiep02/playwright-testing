import dotenv from 'dotenv';
import path from 'path';

// Nạp file .env một lần duy nhất tại đây
dotenv.config({ path: path.resolve(__dirname, '../../.env') }); 

export const env = {
    envName: process.env.ENV || 'development',
    browser: process.env.BROWSER || 'chromium',
    adminUsername: process.env.ADMIN_USERNAME || 'Admin',
    adminPassword: process.env.ADMIN_PASSWORD || 'admin123',
    baseUrl: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com'
};