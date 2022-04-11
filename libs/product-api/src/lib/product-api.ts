import { createConnection } from '@nx-knex/my-knex';

export function productApi(): string {
  const ins = createConnection();
  

  return 'product-api';
}
