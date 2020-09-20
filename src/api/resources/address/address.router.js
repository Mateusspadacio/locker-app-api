import express from 'express';
import passport from 'passport';
import addressController from './address.controller';

export const addressRouter = express.Router();
addressRouter.get('/all', passport.authenticate('jwt', { session: false }), addressController.getAddresses);