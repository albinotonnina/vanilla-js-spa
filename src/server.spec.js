const expect = require('chai').expect;

const request = require('supertest');
const express = require('express');
import api from './server';

describe('Express app', function () {
    let app;

    before(function () {
        app = express();

        app.use('/', api());
    });

    after(function () {

    });

    it('responds to /search/ with a 200 OK', function (done) {
        request(app)
            .get('/search/')
            .expect(200, done);
    });

    it('responds to /results/ with a 200 OK', function (done) {
        request(app)
            .get('/results/')
            .expect(200, done);
    });

    it('responds to /results/ with a 404 OK', function (done) {
        request(app)
            .get('/whatever/')
            .expect(404, done);
    });

    it('responds to /results/ with a 404 OK', function (done) {
        request(app)
            .get('/')
            .expect(404, done);
    });


});
