import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// import json file
// import meals from '../book-meal/meals.json';


// const { expect } = chai.expect;
// const expect = chai.expect;

chai.use(chaiHttp);


describe('API endpoint /', () => {
  // this.timeout(5000); // How long to wait for a response (ms)

  before(() => {

  });

  after(() => {

  });

  // it('Main page content', function (done) {
  //   request('/', function (error, response, body) {
  //     expect(body).to.equal('Hello World');
  //     done();
  //   });
  // });
  // GET - home page
  it('get the home page status', (done) => {
    chai.request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
  // GET - unexisting about page
  it('get the unexisting  about page status', (done) => {
    chai.request(app)
      .get('/about')
      .then((res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});

