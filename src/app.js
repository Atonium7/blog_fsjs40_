import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";
// pour tester la connexion à la BDD avec la méthode getConnection
// à supprimer après le test
// import pool from "./config/db.js";

const app = express();
const PORT = process.env.LOCAL_PORT;

// configuration de moteur de template
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/view"));
// configuration de dossier statique
app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/img", express.static(path.join(process.cwd(), "public/img")));

// FORMULAIRE
app.use(express.urlencoded({ extended: false }));

// middleware pour le router
app.use(router);


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));