Requirements:
1. Install docker
2. in this folder, create a .env file and define the environment variables
    in docker-compose.yml

Startup:
1. from this folder, run: 
    docker-compose up -d
if you already have a volume for the persistent data, the create.sql will not run.
if you want to force it to run again and reset the database, delete the persistent volume.
    See below for more information on persistent volume deletion.

Shutdown:
There is an issue where the docker container will overwrite the file permissions 
of the csv-files and db-init directories. use the shutdown_docker.sh script to fix it.
this will require superuser permissions

1. from this folder, run:
    shutdown_docker.sh
if you want to delete the persistent volume as well, instead run
    shutdown_docker.sh -v

Accessing SQL:
1. docker ps 
    identify the mysql container name, it should be mysql-db
2. docker exec -it mysql-db bash

3. mysql -p 
4. enter password 