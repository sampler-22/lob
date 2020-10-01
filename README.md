# lob
Hello Rock lobster,

Thank you in advance for making time for me.

PROJECT INTRO
This is a rest-api that manage addresses. The project is comprised of the following core technologies:

Nodejs,
Express,
Sequelize,
Esm,
Webpack for bundling,
Postresql database latest,
Jest for testing,
and Babel

Step 1: Install packages

    npm install

Step 2: Create databases

    create 3 databases on postgresl instance
        example: lob_development, lob_test, lob_production

        on each database execute the following sql:
        
        // lob_test
        CREATE EXTENSION citext;

        // lob_development
        CREATE EXTENSION citext;

        // lob_production
        CREATE EXTENSION citext;
    

Step 3: create .env file

    create 3 .env files on the root and name as following:
        .env.development, .env.test, .env.production

        example .env.test file content
        DB_HOST=127.0.0.1
        DB_PORT-5432
        DB_NAME=rest_test
        DB_DIALECT=postgres
        DB_USER=user
        DB_PASSWORD=password
        PORT=3002
        API_BASE_URL=/api/v1
        API_CACHE_DURATION=60

Step 4. create Sequelizer config

    path ./db/config/config.json

    {
        "development": {
            "username": "admin",
            "password": "password",
            "database": "lob_development",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "test": {
            "username": "admin",
            "password": "password",
            "database": "lob_test",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "production": {
            "username": "admin",
            "password": "password",
            "database": "lob_production",
            "host": "127.0.0.1",
            "dialect": "postgres"
        }
    }

Step 5 create table in target 

    Run the following in terminal. make sure you are in the root directory.

    for dev database:
        ./node_modules/.bin/sequelize-cli db:migrate
    for test database:
        ./node_modules/.bin/sequelize-cli db:migrate --env test

    for production database:
        ./node_modules/.bin/sequelize-cli db:migrate --env production

Step 6: grant permissions if using api will use  non-admin user
    
    Grant All permissions on Table Addresses to 'api user'

    Grant All permissions on sequence Addresses to 'api user'

    or use the grant wizard if you have pg4Admin installed

Step 7: Run test

    npm test

    this is seed the database and run all the tests.

Step 8: start pointing to development

    npm start

    this is seed the database and run all the tests. 

If you get stuck call, text or email me @ the following:
    415.683.6672
    ashish@ashishc.io











