const Sequelize = require('sequelize');
//const dotenv = require('dotenv');

//dotenv.config();


const con =  new Sequelize.Sequelize(

    'database',
    "username",
    "password",

    {
        host: "host",
        dialect: "dialect",
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
con.query("SELECT 1", (err, rows) => {
    if (err) throw err;
}).then(function (result){
    console.log(result)
});

module.exports = con;
