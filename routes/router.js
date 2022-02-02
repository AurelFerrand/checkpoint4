import cryptoController from "../controllers/cryptoController.js";

export const setupRoutes = (app) => {
  app.use("/crytpo", cryptoController);

  // ... les autres routes ...
};
