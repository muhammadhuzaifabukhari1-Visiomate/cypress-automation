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

        // stage('Run Cypress Tests') {
        //     steps {
        //         sh 'npx cypress run'      // run Cypress tests
        //     }
        // }

        stage('Run Cypress Tests') {
    steps {
        script {
            catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                sh 'npx cypress run'
            }
        }
    }
}
post {
    always {
        archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
        archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
    }
}


stage('Publish Reports') {
    steps {
        publishHTML([allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'cypress/reports',
            reportFiles: 'mochawesome.html',
            reportName: 'Cypress Test Report'])
    }

    }
 }

}
