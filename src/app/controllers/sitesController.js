import Course from '../models/courseModel.js';
class SiteController {
    // home(req, res) {
    //     res.render('home');
    // }

    async home(req, res) {
        try {
            const data = await Course.find({});
            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    search(req, res) {
        res.render('search');
    }
}

export const siteController = new SiteController();
