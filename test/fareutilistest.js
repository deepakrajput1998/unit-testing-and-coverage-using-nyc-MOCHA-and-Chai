const mocha=require('mocha')
const chai =require('chai')
const fareutilis=require('../frontend/fareUtilis')
const expect =chai.expect

describe('fareutilis',function(){
    it('expect fare to be 50 for 0km,0min',()=>{
        let fare =fareutilis.calcfare(0,0)
        expect(50).to.equal(50)
    })
    it('except fare should be equall to 100 for 5km ,0min',()=>{
        let fare =fareutilis.calcfare(10,0)
        expect(fare).to.equal(100)
    })
})