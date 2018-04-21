const getPort = (envPort) => envPort || 3000;
const getEnv = (nodeEnv) => nodeEnv || 'development';
const getDB = (dbConnection) => {
    // mock database
    if(dbConnection === 'unitTest'){
        return {};
    }
    // integration test
    if(dbConnection === undefined){
        dbConnection = 'testDataBaseName';
    }
    // connect to database

}

module.exports = { getPort, getEnv, getDB };
