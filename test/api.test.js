import api from '../src/api';
import request from 'supertest';

describe('api tests', ()=>{
    it('should be a function',()=>{
        expect(typeof api).toEqual('function');
    });

    it('should return a function',()=>{
        const server = api('test');
        expect(typeof server).toEqual('function');
    });

    describe('should return correct results', ()=>{
        const server = api('test');
        it('/ responds with 200 JSON', function(done) {
            request(server)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('/not_real_rout responds with 404 JSON', function(done) {
            request(server)
                .get('/not_real_rout')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
    });
});