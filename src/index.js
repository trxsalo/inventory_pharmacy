require("dotenv").config(); //Utlizaremos las variables locales
const express =require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

//Innicializamos

const app = express();

//configuraciones
app.set("port", process.env.PORT || 5000);


app.set("views", path.join(__dirname, "views")); //eSTAMOS DICIENDO DONDE ESTA LA CARPETA VIEWS

//Cofiguracion de handlebars

app.engine(".hbs", exphbs.engine({
    defaultLayout: "main",
    layoutDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs", //Definimos que los archivos handlerbars  tiene esta extención
    helpers: require("./lib/handlebars")
}));


app.set("view engine", ".hbs"); //Utilizar el hbs

//midlewares
app.use(morgan("dev"));

app.use(express.urlencoded({extended: false})); //Defiimos que tipos de formato de datos aceptaremos
app.use(express.json()); // Para enviar y recibir json

//Global variables

app.use((req,res,next) =>{
    next();
});

//Routes
app.use(require("./routes")); //el Archivo inicial
app.use(require("./routes/login")); //el Archivo de login
app.use("/inventario", require("./routes/inventario")); //el adminitracion de inventario>


//Public

app.use(express.static(path.join(__dirname, "public"))); //Indicamos donde esta la carptepublic

//Starting the server 

app.listen(app.get("port"), ()=> {
    console.log("Server en el puerto ", app.get("port"));
});
