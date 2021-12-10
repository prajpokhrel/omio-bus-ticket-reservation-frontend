# Omio Bus Ticket Reservation

There are few steps that you need to follow inorder to run this application
in your local machine.

## Installation Guide

First you need to `clone` this repository and run `npm install` to
install all the dependencies used in the project. This project uses `PostgresSQL`
so make sure you have this database installed. After this you can start the project
with `npm start`.

## Set up your environment variables

Create a .env file and add the following environment variables.

```
SESSION_SECRET: <secret token for your sessions>
JWT_CLIENT_PRIVATE_KEY: <private key for jwt authentication>
HOST_EMAIL: <e-mail address to send a mail from>
HOST_PASSWORD: <password for the above e-mail address>
```

## Set up your database

Go to `./sequelize/congif/config.json` and update your database configuration. After that
run the following commands in the `sequelize` directory.

```
sequelize db:create
sequelize db:migrate
```

Finally, start your project using `npm start` from the root directory.

#
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
