docker network create onda
docker run -d --name ondadura-familiarizando-app --restart always --network onda -p 8080:8080 ondadura/familiarizando:v1.0.0
docker run -d --name ondadura-familiarizando-db --restart always --network onda -p 27017:27017 -v /home/ec2-user/ondadurajaraguadosul/storage/familiarizando:/data/db mongo
