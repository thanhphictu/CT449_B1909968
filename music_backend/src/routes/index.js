const api = require("./api");
let index = (app) => {

    app.use('/api', api);
}

module.exports = index;
