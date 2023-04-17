import { describe, test, expect } from 'vitest';
import request from 'supertest';

import { app } from '../../../app';

describe('Get All Users', () => {
  test('should retrieve all users', async () => {
    await request(app)
      .get('/api/users/')
      .set({ Authorization: 'Bearer fake-token' })
      .expect((res) => {
        res.body.length = 3;
        expect(res.body[0].name).toBe('Paulo');
        expect(res.body.length).toBe(3);
      });
  });
});
