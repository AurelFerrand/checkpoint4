import gameController from "../controllers/gameController.js";
import securityController from "../controllers/securityController.js";

export const setupRoutes = (app) => {
  app.use("/security", securityController);
  app.use("/game", gameController);

  // ... les autres routes ...
};
