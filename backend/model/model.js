
class Model {
    urlToDataUsers = 'https://drive.google.com/open?id=1Mnt53fYM_JNsUQgzh7nfsvUjuBAWmh9f';
    urlToDataStatistic = 'https://drive.google.com/open?id=10XCbjQ1QvdFTsOP5kXpmoXOZIqYVT_1K';
    dataUsers = require('./stored/users');
    dataStatistic = require('./stored/statistic');
    pathSQLite = 'C:/sqlite/sqlite-tools-win32-x86-3310100/first.db';
    tableUsers = {
        name: 'users',
        sql: '(id INTEGER, first_name TEXT, last_name TEXT, email TEXT, gender TEXT, ip_address TEXT)',
        sqlColumns: '(id , first_name, last_name, email, gender, ip_address)',
        fields: '(?,?,?,?,?,?)',
        data: [...this.dataUsers]
    };
    tableStatistic = {
        name: 'users_statistic',
        sql: '(user_id INTEGER, date TEXT, page_views INTEGER, clicks INTEGER)',
        sqlColumns: '(user_id, date, page_views, clicks)',
        fields: '(?,?,?,?)',
        data: [...this.dataStatistic]
    };
    arrayTables = [
        this.tableUsers,
        this.tableStatistic
    ];
};
module.exports = Model;