import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// import json file
// import meals from '../book-meal/meals.json';


// const { expect } = chai.expect;
// const expect = chai.expect;

chai.use(chaiHttp);

const menuItem = {
  id: 2,
  date: '21-04-2018',
  meals: [
    {
      id: 1,
      name: 'Fried Rice & CHicken',
      description: 'Dem Fry Rice with groundnut oil and put plenty maggi, abeggi I no know',
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
    },
    {
      id: 2,
      name: 'Jollof Rice & CHicken',
      description: 'Dem Fry Pepper with groundnut oil and put plenty maggi, abeggi I no know',
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
    },
    {
      id: 3,
      name: 'Semo and Egusi',
      description: 'Dem Fry Egusi with groundnut oil and put plenty maggi, abeggi I no know',
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
    },
    {
      id: 4,
      name: 'Fufu and Egusi',
      description: 'Dem Fry Egusi with groundnut oil and put plenty maggi, abeggi I no know',
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
    },
    {
      id: 5,
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
    }
  ]
};

describe('API endpoint /menu', () => {
  // this.timeout(5000); // How long to wait for a response (ms)

  before(() => {

  });

  after(() => {

  });

  // GET - List all menu items
  it('it should return all daily menu', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.menu).to.be.an('array');
        done();
      });
  });
  // GET - a menu
  it('it should return a menu by the given id', (done) => {
    chai.request(app)
      .get('/api/v1/menu/1')
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.menu).to.be.an('array');
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

  // POST - Add new menu
  it('it should add new menu', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .send(menuItem)
      .then((res) => {
        expect(res).to.have.status(201);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // PUT - Update specific menu/3 by id
  it('it should update menu/1', (done) => {
    chai.request(app)
      .put('/api/v1/menu/1')
      .send(menuItem)
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // Delete - Delete specific menu/1 by id
  it('it should delete menu/1', (done) => {
    chai.request(app)
      .delete('/api/v1/menu/1')
      .send(menuItem)
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
  //        .post('/menu')
  //        .type('form')
  //        .send({
  //            menu: 'YELLOW'
  //        })
  //        .then(function (res) {
  //            throw new Error('Invalid content type!');
  //        })
  //        .catch(function (err) {
  //            expect(err).to.have.status(400);
  //        });
  // });
});

