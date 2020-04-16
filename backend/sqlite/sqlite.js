const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(':memory:');
const db = new sqlite3.Database('C:/sqlite/sqlite-tools-win32-x86-3310100/first.db');

class Sqlite {



    getData(tableName) {
        const sql = `SELECT * FROM ${tableName}`;
        return new Promise(
            function (resolve, reject) {
                db.all(sql, [], (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(rows);
                });
            }
        );
    };

    async createFillTable(table) {
        console.log(`++++++++++++++++ model.tableUsers ${table.name}`)
        db.serialize(async function () {
            try {
                await db.run(`CREATE TABLE ${table.name} ${table.sql}`);
            } catch (err) {
                console.log(` table ${table.name} EXIST`);
            };

try{
    const stmt = await db.prepare(`INSERT INTO ${table.name} VALUES (?)`);
    for (var i = 0; i < 10; i++) {
        stmt.run("NewData " + i);
    }
    stmt.finalize();
}catch(err){
console.log(`INSERT ERROR TABLE ${table.name}`)
}


        });
        //   db.close();
    }
};
module.exports = Sqlite;