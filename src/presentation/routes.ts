import {Router} from 'express';
import { CaseRoutes } from './cases/routes';

export class AppRoutes {
    static get routes() : Router{
        const router = Router();
        router.use("/api/case", CaseRoutes.routes);
        return router
    }
}