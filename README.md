## Dockerized mongoDB 📦🍃

### Rename your database

> [docker-compose.yml](./docker-compose.yml)
```yaml
MONGO_INITDB_DATABASE: <database>
```

> [mongo-init.js](./mongodb/mongo-init.js)
```javascript
databaseName = '<database>'
```

### Rename and set password for your readWrite user

> [mongo-init.js](./mongodb/mongo-init.js)
```javascript
db.createUser({
    user: '<user-readWrite>',
    pwd: '<pass-readWrite>',
    roles: [
        {
            role: 'readWrite',
            db: databaseName,
        }
    ]
});
```

### Let it run!

```zsh
docker-compose up -d
```