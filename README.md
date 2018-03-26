# Bee Hook Server

`bee-hook` is a simple, zero-configuration command-line hook server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.
(yes, it's inspired by [http-server](https://www.npmjs.com/package/http-server))

## Try it now :D
    https://hook.beetech.global/

## Installing globally

Installation via `npm`:

    npm install bee-hook -g

## Usage

    bee-hook [options]

*Now you can visit http://localhost:5000 to view your server*


## Available Options

`-p` Port to use (defaults to 5000)


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

___

### Send your requests

**URL** : `/bin/<hash>`

**Method** : `{ POST | GET | PUT | PATCH | DELETE | OPTIONS }`

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

___

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

___

### List all bins

**URL** : `/api/bins`

**Method** : `GET`

**Reponses**

**Code** : `200 OK`

**Content** :

```javascript
[
    {
        "hash":"grqjbf8bti",
        "created_at":"2018-02-21T23:24:05.488Z",
        "last_update":"2018-02-21T23:26:00.595Z",
        "total":50
    },
    {
        "hash":"hhyasd12x",
        "created_at":"2018-02-21T23:24:05.488Z",
        "last_update":"2018-02-23T23:26:00.595Z",
        "total":6
    }
]
```

___


### Delete a hash

**URL** : `/api/bins/<hash>`

**Method** : `DELETE`

**Reponses**

**Code** : `200 OK`

**Content** : No Content
___

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

- Configuring self url
```
$ heroku apps:info hook-mock
...
# Web URL: <url>

$ heroku config:set HOST=<url>
```

## Deployment (PM2)

- Clone the `bee-hook` repository
- Add your server key as deployment key in repository
- Edit `ecosystem.conf.js`
- Setup application on server - run this in your machine - `pm2 deploy production setup`
- Deploy application - run this in your machine - `pm2 deploy production --force`