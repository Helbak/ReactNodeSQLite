const sqlite = new (require('../sqlite/sqlite'));
const model = new (require('../model/model'));

class Service {

    async getData(tableName) {
        try {
             await sqlite.getData(tableName);
            return true;
        } catch (err) {
            return false;
        }
    };



    async prepareData() {
        // const data = [...await this.getData('lorem')];   model.tableUsers.name
        await this.getData(model.tableUsers.name) ? (console.log('tableUsers EXIST')) : (await sqlite.createFillTable(model.tableUsers));
    };

};

module.exports = Service;


