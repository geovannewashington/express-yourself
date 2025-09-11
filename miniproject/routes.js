// routes.js

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = {
    '/': path.join(__dirname, 'views', 'index.html'),
    '/about': path.join(__dirname, 'views', 'about.html'),
    '404': path.join(__dirname, 'views', '404.html')
};

export default routes;
