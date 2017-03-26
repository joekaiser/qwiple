var configBase = {
    root: require('path').normalize(__dirname + '/..'),
    name: "qwiple",
    secret: 'kapu-manu',
    logLevel: 'verbose',
    db: {
        connection: "mongodb://127.0.0.1:27017/qwiple"
    }
}

var test = JSON.parse(JSON.stringify(configBase));
//test.db = // test environment db connection information

var production = JSON.parse(JSON.stringify(configBase));
//production.db = // production environment db connection information

module.exports = {
    development: configBase,
    test: test,
    production: production
}