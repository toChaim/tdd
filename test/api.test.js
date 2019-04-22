import api from '../src/api';
import request from 'supertest';

const makeSpy = ()=>{ 
            let cnt = 0; 
            return (...args)=>{
                return {cnt: ++cnt, args}
            };
        };

describe('api tests', ()=>{
    test('should be a function',()=>{
        expect(typeof api).toEqual('function');
    });

    test('should return a function',()=>{
        const server = api('test', {notFoundError: makeSpy(), errorHandler: makeSpy()});
        expect(typeof server).toEqual('function');
    });

    describe('should return correct results', ()=>{
        const server = api('test', {notFoundError: makeSpy(), errorHandler: makeSpy()});
        test('/ responds with 200 JSON', function(done) {
            request(server)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        test('/not_real_rout call both  notFoundError and errorHandler', function(done) {
            request(server)
                .get('/not_real_rout')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
    });
});