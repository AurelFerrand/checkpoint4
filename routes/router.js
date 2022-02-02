import cryptoController from "../controllers/cryptoController.js";
import securityController from "../controllers/securityController.js";

export const setupRoutes = (app) => {
  app.use("/security", securityController);
  app.use("/crytpo", cryptoController);

  // ... les autres routes ...
};
