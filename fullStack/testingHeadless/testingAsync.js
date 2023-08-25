const request = require('supertest');
// This library was specifically designed for testing Node server responses.
const app = require('../../app');

describe('the homepage', () => {
  it('returns undefined', () => {
    const response = request(app)
      .get('/')
      .send();
      console.log(response.text); // logs undefined
    });
  it('returns the correct content', async () => {
    const response = await request(app)
      .get('/')
      .send();
      console.log(response.text); // logs undefined
    });
});

/**
 * format for post request
 await request(app)
     .post('/messages')
     .type('form')
     .send({author, message});
 */
