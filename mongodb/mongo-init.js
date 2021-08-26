//Modify this
databaseName = '<database>'


db.auth('root', 'rootpass')
db = db.getSiblingDB(databaseName)
// Uncomment to test on the first "docker-compose up -d"
/*
var testcoll = db.getCollection('testcoll')

testcoll.insertOne({
    message: 'Just testing'
})*/

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