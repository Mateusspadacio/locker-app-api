import lockerGroup from './lockerGroup.model';

export default {
    findByRange({ longMin, longMax, latMin, latMax }) {
        return lockerGroup.find({
            long: {
                $gte: longMin,
                $lte: longMax
            },
            lat: {
                $gte: latMin,
                $lte: latMax
            }
        });
    }
}