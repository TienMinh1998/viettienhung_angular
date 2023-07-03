  pipeline{
    agent any
    stages{
        stage("Clone github"){
            steps{
                 git branch: 'develop', url: 'https://github.com/TienMinh1998/viettienhung_angular.git'
            }
        }
        stage('build image') {
                  steps{
                         sh 'docker build -f  Dockerfile -t viettienhung_angular .'
                  }
        }
         stage('Stop old-container') {
                  steps{
                        sh 'docker container stop viettienhung_angular_container'
                  }
                
        }
        stage('Delete old-container') {
             steps{
                    sh 'docker container rm viettienhung_angular_container'
                  }
               
        }
          stage('Publish and maping port') {
             steps{
                          sh 'docker run -it -d --name viettienhung_angular_container -p 127.0.0.1:8055:80 viettienhung_angular'
                  }
        }
    }
}