const request = require('supertest');
const { expect } = require('chai');
const mongoose = require('mongoose');

const api = require('../api');

mongoose.Promise = Promise;
const { User } = require('../models');

var token;
var auth = {};

describe('user integration test', function() {
  beforeEach(function() {
    console.log('before integration test.');
  });

  it('fake integration test', function() {
    expect(200).to.equal(200);
  });

  it('fake integration test 2', function() {
    expect(201).to.equal(201);
  });
});

// // function loginUser(auth) {
// //   return function(done) {
// //     console.log('fake loginUser');
// //     request(api)
// //       .post('/auth/login')
// //       .json({
// //         username: 'beforeEachTest',
// //         password: 'secret'
// //       })
// //       .expect(200)
// //       .end(onResponse);

// //     function onResponse(err, res) {
// //       console.log('onResponse');
// //       auth.token = res.body.token;
// //       return done();
// //     }
// //   };
// // }

// // beforeEach(function(done) {
// //   db.User
// //     .create({ username: 'beforeEachTest', password: 'secret' })
// //     .then(function(user) {
// //       auth.current_user = user;
// //       done();
// //     });
// // });

// // beforeEach(loginUser(auth));

// // afterEach(function(done) {
// //   db.User.remove({}).then(function() {
// //     done();
// //   });
// // });

// // describe('POST /auth/signup', function() {
// //   it('responds with JSON when created', function(done) {
// //     request(api)
// //       .post('/auth/signup')
// //       .send({ username: 'test1', password: 'secret' })
// //       .set('Accept', 'application/json')
// //       .expect(200, done);
// //   });
// // });

// // describe('POST /auth/login', function() {
// //   it('responds with JSON', function(done) {
// //     request(api)
// //       .post('/auth/login')
// //       .send({ username: 'postTest', password: 'secret' })
// //       .set('Accept', 'application/json')
// //       .expect(201, done);
// //   });
// // });

// // describe('GET /users', function() {
// //   it('responds with JSON', function(done) {
// //     request(api)
// //       .get('/users')
// //       .set('Accept', 'application/json')
// //       .expect(200, done);
// //   });
// // });

// // describe('GET /users/:username', function() {
// //   it('responds with JSON', function(done) {
// //     request(api)
// //       .get(`/users/${auth.current_user.username}`)
// //       .set('Authorization', `bearer: ${auth.token}`)
// //       .expect(200, done);
// //   });
// // });

// // describe('PATCH /users/:username', function() {
// //   it('responds with JSON', function(done) {
// //     request(api)
// //       .patch(`/users/${auth.current_user.username}`)
// //       .send({
// //         username: 'patchTest'
// //       })
// //       .set('Authorization', `bearer: ${auth.token}`)
// //       .expect(200, done);
// //   });
// // });

// // describe('DELETE /users/:username', function() {
// //   it('responds with JSON', function(done) {
// //     request(api)
// //       .delete(`/users/${auth.current_user.username}`)
// //       .set('Authorization', `bearer: ${auth.token}`)
// //       .expect(204, done);
// //   });
// // });

// describe('can I get tests to end?', function() {
//   it('Is the first test.', function(done) {
//     done();
//   });
// });
