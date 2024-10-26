Requirements:
1. Install docker
2. in this folder, create a .env file and define the environment variables
    in docker-compose.yml

Startup:
1. from this folder, run: 
    docker-compose up
if you already have a volume for the persistent data, the create.sql will not run.
if you want to force it to run again and reset the database, delete the persistent volume.
    See below for more information on persistent volume deletion.

Shutdown:
1. from this folder, run:
    docker-compose down
if you want to delete the persistent volume as well, instead run
    docker-compose down -v