import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url'
import router from './routes/hobbies.js';
const PORT = process.env.PORT || 8080; // fallback to 8080
const app = express();

// Get __filename and __dirname back
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config EJS
app.set('view engine', 'ejs'); // specifies what view engine to use
app.set('views', path.resolve(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.get('/', (req, res, next) => {
    const username = req.query.user || 'Bob'; // fallbacks to bob

    // In we can access the fields of the object passed as a local variable in 'index.ejs' 
    res.render('index.ejs', {
        user: username,
    });
});


app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
