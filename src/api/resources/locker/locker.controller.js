import lockerService from './locker.service';

export default {
    async getNearbyLockers(req, res) {
        const long = req.params.long;
        const lat = req.params.lat;
        const validator = lockerService.validateParams(req.params);

        if (!validator.isValid) {
            return res.status(400).json({ params: validator.params });
        }

        const lockers = await lockerService.findLockersByRange(long, lat);

        return res.status(200).send(lockers);
    }
};