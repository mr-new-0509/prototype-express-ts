import express, { Router } from "express";
import { prototypeFunc } from "../controllers/prototypeController";

const router: Router = express.Router();

router.get("/prototype-func", prototypeFunc);

module.exports = router;
