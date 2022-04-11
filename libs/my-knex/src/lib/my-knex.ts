import knex from 'knex';

export const createConnection = () => {
  const ins = knex({
    connection: {
      host: 'localhost',
    },
  });

  return ins;
};
