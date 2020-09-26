import express from 'express';
import passport from 'passport';
import lockerController from './locker.controller';

export const lockerRouter = express.Router();
lockerRouter.get('/lockers/long/:long/lat/:lat', passport.authenticate('jwt', { session: false }), lockerController.getNearbyLockers);
lockerRouter.get('/lockers/locker-group/:id', passport.authenticate('jwt', { session: false }), lockerController.getLockersByLockerGroup);
