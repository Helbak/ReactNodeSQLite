const sqlite = new (require('../sqlite/sqlite'));
const model = new (require('../model/model'));

class Service {

    findInArray(array, object) {
        for (let i = 0; i < array.length; i++) {
          if (array[i].id === object.id) return true;
        }
        return false;
      };

      completeUsers(crude) {
        const completed = [];
        for (let i = 0; i < crude.length; i++) {
          if (!findInArray(completed, crude[i])) {
            completed.push(crude[i]);
          }
        };
        for(let i=0; i<completed.length; i++){
          const arrayIds = crude.filter(object => object.id === completed[i].id);
          let sum = 0;
          arrayIds.forEach(object => {sum = sum + object.clicks});
          completed[i].totalClicks = sum;
        }
        return completed;
      };

    async getUserList(req, res) {
        try {
            const between = req.body;
            let sql = `select * from users left join users_statistic on users.id = users_statistic.user_id where id between ${between.from} and ${between.to}`;
            console.log(sql);
            const data = await sqlite.getData(sql);
            return res.status(200).json(data);
        } catch (e) {
            console.error('Service getUserList', e);
            return res.status(400).send(`You aren't lucky: ` + e.message);
        };
    };

    async getData(sql) {
        try {
            return await sqlite.getData(sql);
        } catch (err) {
            console.log(err)
            return false;
        };
    };

    async createFillTable(table) {
        await sqlite.createTable(table);
        await sqlite.fillTable(table);
    };

    async prepareData() {
        for (let i = 0; i < model.arrayTables.length; i++) {
            await this.getData(`SELECT * FROM ${model.arrayTables[i].name}`)
                ? (console.log('table ${model.arrayTables[i].name} EXIST'))
                : (await this.createFillTable(model.arrayTables[i]));
        };
        console.log(`<< <  prepareData  >>>  accomplished`)
    };

};

module.exports = Service;


