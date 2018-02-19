# Bee Hook Server

`bee-hook` is a simple, zero-configuration command-line hook server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.
(yes, it's inspired on [http-server](https://www.npmjs.com/package/http-server))

## API's

### Creates new bin to post your requests

**URL** : `/api/bins`

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

**Method** : `{ POST | GET | PUT | PATCH | OPTIONS }`

**Body** :

```json
{
    "name": "Lucas Daiki",
    "Age": "23"
}
```

**Reponses**

**Code** : `200 OK`

**Content** : No Content


### Check your requests

**URL** : `/api/bins/<hash>`

**Method** : `GET`

**Reponses**

**Code** : `200 OK`

**Content** :

```javascript
{
    "created_at": "2018-02-19T21:56:47.942Z",
    "last_update": "2018-02-19T22:02:40.149Z",
    "bins": [
        {
            "method": "POST",
            "body": {
                "name": "Lucas Daiki",
                "Age": "23"
            },
            "query": {},
            "headers": { ... },
            "created_at": "2018-02-19T22:01:17.784Z"
        },
        {
            "method": "GET",
            "body": { },
            "query": { "test": "123" }, // ?test=123
            "headers": { ... },
            "created_at": "2018-02-19T22:02:40.149Z"
        }
    ],
    "total": 2
}
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