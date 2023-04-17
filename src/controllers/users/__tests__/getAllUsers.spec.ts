import { describe, test, expect } from 'vitest';
import { app } from '../../../app';
import supertest from 'supertest';

describe('Get All Users', () => {
  test('should retrieve all users', () => {
    supertest(app)
      .get('/api/nao-existe')
      .expect((res) => {
        res.body.data.length = 2;
        res.body.data[0].email = 'test@example.com';
        res.body.data[1].email = 'francisco@example.com';
      });
  });
});
