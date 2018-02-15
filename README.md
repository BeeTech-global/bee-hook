# Bee Hook Server

`bee-hook` is a simple, zero-configuration command-line hook server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.
(yes, it's inspired on [http-server](https://www.npmjs.com/package/http-server))


# Installing globally:

Installation via `npm`:

    npm install bee-hook -g

## Usage:
    bee-hook [options]

*Now you can visit http://localhost:5000 to view your server*


## Available Options:

`-p` Port to use (defaults to 8080)


# Deployment (Heroku):

 - Clone the `bee-hook` repository

 - Install heroku [See more](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
 
 - Login Heroku
 ```
 heroku login
 ```
 
 - Create an app on Heroku
 ```
 heroku create
 ```
 
 - Deploy your hook server :D
 ```
 git push heroku master
 ```

 - Open the new url 
 ```
 heroku open
 ```