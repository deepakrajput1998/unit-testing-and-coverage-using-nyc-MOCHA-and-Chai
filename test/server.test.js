const mocha =require('mocha')
const expect =require('chai').expect
const app=require('../server')
const request=require('request')
let server;

describe('server',()=>{
    before((done)=>{
        server=app.listen(2223,done)
    })
    it('rate should be correct',(done)=>{
        request.get('http://localhost:2222/rate',(err,res,body)=>{
         // console.log(body))
          let rate =JSON.parse(body);
        expect(rate.fixed).to.equal(50)
            done()
        })
    })
  
})
after(()=>
server.close())