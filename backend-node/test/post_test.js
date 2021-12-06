const Post = require('../src/models/Post');
const assert = require('assert');
  
describe('Post adding and searching test', () => {

let post;

    beforeEach((done) => {
        post = new Post({
            filename: "Pic_000",
            text: "Test",
            firstName: "Hans",
            lastName: "Pringel",
            likeAmount: 5       
            });
        post.save()
            .then(() => done());
    });


    it('Check if post got added', (done) => {
        assert(!post.isNew);
        done();
    });

    it('Find posts by specific user', (done) => {
        Post.findOne({ firstName: 'Hans', lastName: 'Pringel' })
            .then((post) => {
                assert(post.firstName === 'Hans', post.lastName === 'Pringel');
                done();
            });
    });  
});