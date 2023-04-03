/*eslint-disablej*/
import { mytasks } from '../index.js';

const shop = () => {
  localStorage.setItem('mytasks', JSON.stringify(mytasks));
};

export { shop };