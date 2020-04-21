const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('C:/sqlite/sqlite-tools-win32-x86-3310100/first.db');

class Sqlite {

    getData(sql) {
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

    async fillTable(table) {
        console.log(`>>>>>> fillTable ${table.name}`)
        await db.serialize(async function () {
            var stmt = await db.prepare(`INSERT INTO ${table.name} ${table.sqlColumns} VALUES ${table.fields}`);
            console.log(`INSERT INTO ${table.name} ${table.sqlColumns} VALUES ${table.fields}`)
            if (table.name === 'users') {
                for (var i = 0; i < table.data.length; i++) {
                    await stmt.run(table.data[i].id, table.data[i].first_name, table.data[i].last_name, table.data[i].email, table.data[i].gender, table.data[i].ip_address);
                }
            };
            if (table.name === 'users_statistic') {
                for (var i = 0; i < table.data.length; i++) {
                    await stmt.run(table.data[i].user_id, table.data[i].date, table.data[i].page_views, table.data[i].clicks);
                }
            };
            await stmt.finalize();
        });
    };

    async createTable(table) {
        await db.serialize(async function () {
            try {
                await db.run(`CREATE TABLE IF NOT EXISTS ${table.name} ${table.sql}`);
                console.log(`CREATE TABLE IF NOT EXISTS ${table.name} ${table.sql}`)
                return true;
            } catch (err) {
                return false;
            };
        });
    };
    async close() {
        db.close();
    };
};
module.exports = Sqlite;