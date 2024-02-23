pipeline {
  agent {label "macos"}
  stages {
    stage('Hola') {
      steps {
        echo "hola desde Jenkinsfile"
      }
    }
    stage('para el branch fix'){
      when {
        branch "fix-*"
      }
      steps {
        sh '''
          cat README.md
        '''
      }
    }
    stage('para el PR') {
      when {
        branch 'PR-*'
      }
      steps {
        echo 'este solamente ejecuta para los PRs'
      }
    }
  }
}
