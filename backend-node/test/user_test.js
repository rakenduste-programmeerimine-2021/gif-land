const User = require('../src/models/User');
const assert = require('assert');
  
describe('User register, register check and login tests', () => {

let user;

    beforeEach((done) => {
        user = new User({
            firstName: "Hans",
            lastName: "Pringel",
            email: "hans@pringel.com",
            password: "12345678"         
            });
        user.save()
            .then(() => done());
    });


    it('Register test', (done) => {
        assert(!user.isNew);
        done();
    });


    it('Double registration prevention test', (done) => {
    User.findOne({ email: 'hans@pringel.com' })
        .then((user) => {
            assert(user.email === 'hans@pringel.com');
            done();
        });
    });


    it('Login test', (done) => {
        User.findOne({ email: 'hans@pringel.com' })
            .then((user) => {
                assert(user.email === 'hans@pringel.com', user.password === '12345678');
                done();
            });
    });  
});