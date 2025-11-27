// fake hardcoded database
const hobbiesArr = [
    'programming',
    'reading',
    'dreaking tea',
    'playing vide-games',
];

class HobbiesController {
    static deleteHobby(req, res, next) {
        const hobby = req.body.hobby;                 

        if (!hobby) {
            const err = new Error('no hobby provided');
            err.status = 400;
            return next(err);
        }
    
        if (!hobbiesArr.includes(hobby)) {
            const err = new Error('hobby not found');
            err.status = 404;
            return next(err);
        }

        const index = hobbiesArr.indexOf(hobby);
        hobbiesArr.splice(index, 1);
        res.status(200); 
    }
};

export default HobbiesController;
