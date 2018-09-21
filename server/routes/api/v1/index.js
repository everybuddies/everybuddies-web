var router = require('express').Router();

const fs = require('fs');
const getPristine = () => new Promise((resolve, reject)=>{
    fs.readdir('../../../data/100ANDRO', (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      })

})

module.exports = function (parentRouter) {
    router.get('/pristine', function (req, res) {
        res.reply(getPristine());
    });
    parentRouter.use('/v1', router);
};