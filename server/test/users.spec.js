import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// import json file
// import users from '../book-user/users.json';


// const expect = chai.expect;
// const expect = chai.expect;

chai.use(chaiHttp);

const user = {
  id: '3',
  name: 'Pounded Yam',
  description: 'Trust me I know how to make pounded yam, but no time',
  price: 1500,
  categories: 'Breakfast, Lunch, Dinner',
  status: 'Ready',
  pictures: [
    {
      name: 'Location',
      size: '400'
    },
    {
      name: 'Location',
      size: '400'
    }
  ],
  caterer_id: '123456qwerty'
};

describe('API endpoint /users', () => {
  // this.timeout(5000); // How long to wait for a response (ms)

  before(() => {

  });

  after(() => {

  });

  // GET - List all users
  it('it should return all users', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.users).to.be.an('array');
        done();
      });
  });
  // GET - a user
  it('it should return a user by the given id', (done) => {
    chai.request(app)
      .get('/api/v1/users/1')
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.users).to.be.an('array');
        done();
      });
  });

  // GET - Invalid path
  // it('it should return Not Found', () => chai.request(app)
  //   .get('/INVALID_PATH')
  //   .then((res) => {
  //     expect(res).to.have.status(200);
  //     throw new Error('Path exists!');
  //   })
  //   .catch((err) => {
  //     expect(err).to.have.status(404);
  //   }));

  // POST - Add new user
  it('it should add new user', (done) => {
    chai.request(app)
      .post('/api/v1/users')
      .send(user)
      .then((res) => {
        expect(res).to.have.status(201);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // PUT - Update specific user/3 by id
  it('it should update user/3', (done) => {
    chai.request(app)
      .put('/api/v1/users/3')
      .send(user)
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // Delete - Delete specific user/3 by id
  it('it should delete user/3', (done) => {
    chai.request(app)
      .delete('/api/v1/users/3')
      .send(user)
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // // POST - Bad Request
  // it('should return Bad Request', function () {
  //    return chai.request(app)
  //        .post('/users')
  //        .type('form')
  //        .send({
  //            user: 'YELLOW'
  //        })
  //        .then(function (res) {
  //            throw new Error('Invalid content type!');
  //        })
  //        .catch(function (err) {
  //            expect(err).to.have.status(400);
  //        });
  // });
});

