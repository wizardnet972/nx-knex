import { myKnex } from './my-knex';

describe('myKnex', () => {
  it('should work', () => {
    expect(myKnex()).toEqual('my-knex');
  });
});
