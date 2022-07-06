const Sequelize = require('sequelize');

const con =  new Sequelize.Sequelize(

    'versions',
    "versions",
    "B0st#20zz",

    {
        host: "41.76.175.65",
        dialect: "mysql",
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
