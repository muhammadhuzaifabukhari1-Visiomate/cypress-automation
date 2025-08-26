pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/muhammadhuzaifabukhari1-Visiomate/cypress-automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'          // install node packages
                sh 'npx cypress install'  // download Cypress binary
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        sh 'npx cypress run'
                    }
                }
            }
        }
 
    }

}
