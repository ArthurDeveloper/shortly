import { Router, Request, Response } from 'express';
import UrlController from './controllers/UrlController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.render('index.html');
});

router.get('/url/shorten', UrlController.shorten);
router.get('/:id', UrlController.get);

router.get('*', (req: Request, res: Response) => {
    return res.status(404).render('404.html');
});

export default router;