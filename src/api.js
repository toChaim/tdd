import express from 'express';
import notFoundError from './helpers/notFoundError';
import errorHandler from './helpers/errorHandler';

export default (NODE_ENV,{notFoundError,errorHandler})=>{
    const api = express();

    api.get('/', (req,res,next)=>{
        return res.json({users: '/users'});
    });

    api.use(notFoundError);
    api.use(errorHandler);

    return api;
}