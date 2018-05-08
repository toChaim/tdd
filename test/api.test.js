import api from '../src/api';

describe('api tests', ()=>{
    it('should be a function',()=>{
        expect(typeof api).toEqual('function');
    });

    it('should return a function',()=>{
        const server = api('test');
        expect(typeof server).toEqual('function');
    });

});