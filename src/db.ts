import { Pool } from 'pg';
import config from './dbconfig';

const pool = new Pool(config);

pool.on('connect', () => {
  console.log('Az adatbázis kapcsolódott');
});

export default pool;