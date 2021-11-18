import { Request, Response } from 'express';
import Url from '../models/Url';

export default class UrlController {
    static async shorten(req: Request, res: Response) {
        if (!req.query.url) {
            return res.status(400).json({
                error: 'You must pass the url you want to shorten as a query param'
            });
        }

        const url: string = req.query.url as string;
        const urlRegex = /(https?:\/\/(?:www\.|(?!www))[A-z0-9][A-z0-9-]+[A-z0-9]\.[^\s]{2,}|www\.[A-z0-9][A-z0-9-]+[A-z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[A-z0-9]+\.[^\s]{2,}|www\.[A-z0-9]+\.[^\s]{2,})/;
        if (!url.match(urlRegex)) {
            return res.status(400).json({
                error: 'You must pass a valid url'
            });
        }

        Url.create(url as string, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            return res.json({
                success: true,
                data
            });
        });
    }

    static get(req: Request, res: Response) {
        if (!req.params.id) {
            return res.status(400).json({
                error: 'You must pass the id of the url as a slug'
            });
        }

        Url.get(req.params.id, (err, data) => {
            if (err || data === undefined) {
                return res.status(404).render('404.html');
            }

            return res.redirect(data.url);
        });
    }
}