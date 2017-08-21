var Promise = require('bluebird');
module.exports = {
    getUsers: function (access)
    {
        var users = [{id: 1001, name: 'Stefan'}, {id: 1002, name: 'John'}];
        return new Promise(function (resolve, reject)
        {
            if (access) {
                resolve(users)
            } else {
                reject('Not permitted!');
            }
        })
    }
};
