# Bee Hook Server

`bee-hook` is a simple, zero-configuration command-line hook server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.
(yes, it's inspired on [http-server](https://www.npmjs.com/package/http-server))

## API's

### Creates new bin to post your requests

**URL** : `/bin`

**Method** : `POST`

**Reponses**

**Code** : `200 OK`

**Content** :

```json
{
    "hash": "<hash>",
    "url": "http://localhost:5000/bin/<hash>"
}
```

### Post your requests

**URL** : `/bin/<hash>`

**Method** : `POST`

**Body** :

```json
{
    "name": "Lucas Daiki",
    "Age": "23"
}
```

**Reponses**

**Code** : `200 OK`

**Content** :

```json
{
    "hash": "<hash>",
    "url": "http://localhost:5000/bin/<hash>"
}
```

### Check your requests

**URL** : `/bin/<hash>`

**Method** : `GET`

**Reponses**

**Code** : `200 OK`

**Content** :

```json
[
    {
      "body": {
        "name": "Lucas Daiki",
        "Age": "23"
      },
      "headers": { ... },
      "created_at": "2018-02-15T22:07:29.480Z"
    },
    {
      "body": {
        "name": "Alexandre Wrigth",
        "Age": "23"
      },
      "headers": { ... },
      "created_at": "2018-02-15T22:07:36.400Z"
    }
]
```

## Installing globally

Installation via `npm`:

    npm install bee-hook -g

## Usage

    bee-hook [options]

*Now you can visit http://localhost:5000 to view your server*


## Available Options

`-p` Port to use (defaults to 5000)

## Deployment (Heroku)

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