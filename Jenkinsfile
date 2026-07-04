pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.45.0-jammy'
            args '-u root'
        }
    }
    
    triggers {
        cron('H H * * *') 
    }
    
    options {
        timeout(time: 1, unit: 'HOURS')
        ansiColor('xterm')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
    
    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                reportTitles: 'OrangeHRM Automation Report'
            ])
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
}