const expect = require('chai').expect;

const request = require('supertest');
const express = require('express');
import api from '../index';

describe('Express api', function () {
    let app;

    before(function () {
        app = express();

        app.use('/api', api());
    });

    after(function () {

    });

    it('responds to / with a 200 OK', function (done) {
        request(app)
            .get('/api/search')
            .expect(200, done);
    });

    it('should send the json file is search = N11', function (done) {
        request(app)
            .get('/api/search/N11')
            .expect(200, done)
            .expect(function (res) {
                expect(res.body.result_count).eql(5);
            });
    });
    it('should NOT send the json file is search != N11', function (done) {
        request(app)
            .get('/api/search/AreYouReadingThis')
            .expect(200, done)
            .expect(function (res) {
                expect(res.body.result_count).eql(0);
            });
    });
});
