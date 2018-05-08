import api from '../src/api';

describe('api tests', ()=>{
    it('should be a function',()=>{
        expect(typeof api).toEqual('function');
    })
});