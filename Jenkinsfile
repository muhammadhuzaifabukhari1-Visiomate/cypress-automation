pipeline {
    agent any   // Jenkins runs on any available machine

    stage('Checkout Code') {
    steps {
        git branch: 'main',
            url: 'https://github.com/muhammadhuzaifabukhari1-Visiomate/cypress-automation.git'
    }
}


        stage('Install Dependencies') {
            steps {
                // Windows
                bat 'npm install'

                // Linux/Mac (if needed, replace bat with sh)
                // sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Windows
                bat 'npx cypress run'

                // Linux/Mac
                // sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Save Cypress videos/screenshots inside Jenkins build results
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', followSymlinks: false
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', followSymlinks: false
        }
    }



