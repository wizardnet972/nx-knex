import knex from 'knex';

export const createConnection = () => {
  const ins = knex({
    connection: {
      host: 'localhost',
    },
  });

  console.log({ inCreateConnection: ins.customSelect })

  return ins;
};
