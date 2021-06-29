const express = require("express");
const { PORT } = require("./config/constants");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const authRouter = require("./routers/auth");
const authMiddleWare = require("./auth/middleware");
const Users = require("./models").user;
const Recipes = require("./models").recipe;

const app = new express()

app.use(loggerMiddleWare("dev"));
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

app.use("/", authRouter);

app.get("/", (req, res) => {
    res.send("Hi from express");
  });


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });


  // POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
    // accessing user that was added to req by the auth middleware
    const user = req.user;
    // don't send back the password hash
    delete user.dataValues["password"];
  
    res.json({
      youPosted: {
        ...req.body,
      },
      userFoundWithToken: {
        ...user.dataValues,
      },
    });
  });


// get all recipes of a user

app.get("/getrecipes", async (req, res) => {
    try {
        const { id } = req.body
        
        const user = await Users.findByPk(id)
        const recipes = await Recipes.findAll({ where: { userId: user.id } })

        return res.status(200).send({ message: "ok", recipes })

    } catch(error) {
        console.log(error.message)
    }
}),


// get all recipes

app.get("/recipes", async (req, res) => {
    try {
        const rezzz = await Recipes.findAll()
        return res.status(200).send({ message: "ok", rezzz})
    } catch(error) {
        console.log(error.message)
    }
})