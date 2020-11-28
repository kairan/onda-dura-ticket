docker network create onda
docker run -d --name ondadura-familiarizando-app --restart always --network onda -p 8080:8080 ondadura/familiarizando:v1.0.0
docker run -d --name ondadura-familiarizando-db --restart always --network onda -p 27017:27017 -v /home/kairan/ondadurajaraguadosul/storage/familiarizando:/data/db mongo

--

realizar o build 
docker build -t ondadura/familiarizando:v2.0.0 .
docker save ondadura/familiarizando:v2.0.0 -o ondadura_familiarizando_v2.tar
scp -i ~/Downloads/LucasKrugerAWS.pem ondadura_familiarizando_v2.tar ec2-user@52.5.44.226:/home/ec2-user
docker load -i ondadura_familiarizando_v2.tar 