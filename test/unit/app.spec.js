'use strict';
var expect = require('chai').expect;
var getUsers = require('../../app/app').getUsers;
describe('app', function ()
{
    describe('authorized', function ()
    {
        it('should get all users', function ()
        {
            return getUsers(true).then(function (data)
            {
                expect(data).to.eql([{id: 1001, name: 'Stefan'}, {id: 1002, name: 'John'}]);
            });
        });
    });
    describe('not authorized', function ()
    {
        it('should return error', function ()
        {
            return getUsers(false).then(function ()
            {
                throw Error('Should not pass!');
            }).catch(function (err)
            {
                expect(err).to.eql('Not permitted!');
            });
        });
    });
});
