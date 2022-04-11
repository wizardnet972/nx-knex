import { createConnection } from '@nx-knex/my-knex';

export function productApi(): string {
  const ins = createConnection();
  
  console.log({ inProduct: ins.customSelect })

  return 'product-api';
}
