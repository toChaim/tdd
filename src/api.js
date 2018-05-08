import express from 'express';
import notFoundError from './helpers/notFoundError';

export default (NODE_ENV)=>{
    const api = express();

    api.get('/', (req,res,next)=>{
        return res.json({users: '/users'});
    });

    api.use(notFoundError);

    api.use((err, req, res, next) => {
        return res.status(err.status || 500).json({
          message: err.message,
          error: NODE_ENV === "development" ? err : {}
        });
      });

    return api;
}