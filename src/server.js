import express from "express";
import morgan from "morgan";
import { engine  } from "express-handlebars"
import path from "path";
import { fileURLToPath } from 'url';

// Init __dirname
const __filename = fileURLToPath(import.meta.url); // Lấy đường dẫn file hiện tại
const __dirname = path.dirname(__filename); // Lấy thư mục chứa file hiện tại src

console.log(__dirname)


const app =express();
const port =3000;

// Middleware for TEMPLATE ENGINE
app.engine('hbs', engine ({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../resources/views'));

//console.log(path.join(__dirname));

// Middleware for logging requests
app.use(morgan('combined'))
app.get("/",(req,res)=>{
    res.render('home');
})

app.get("/news",(req,res)=>{
    res.render('new');
})

app.listen(port, () => {
    console.log("Server is running on port 3000");
});