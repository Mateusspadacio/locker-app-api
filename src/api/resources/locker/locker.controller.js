import lockerGroup from './lockerGroup.model';
import lockerService from './locker.service';

export default {
    async getNearbyLockers(req, res) {
        const long = req.params.long;
        const lat = req.params.lat;
        const validator = lockerService.validateParams(req.params);

        if (!validator.isValid) {
            return res.status(400).json({ params: validator.params });
        }
        
        const range = lockerService.getRange(long, lat, 0.090000);

        const lockers = await lockerGroup.find({
            long: {
                $gte: range.longMin,
                $lte: range.longMax
            },
            lat: {
                $gte: range.latMin,
                $lte: range.latMax
            }
        });

        return res.status(200).send(lockers);
    }
};