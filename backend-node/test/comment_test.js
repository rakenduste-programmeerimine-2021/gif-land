const Comment = require('../src/models/Comment');
const assert = require('assert');
const ObjectID = require('mongodb').ObjectId;
  
describe('Comment adding test', () => {

let comment;

    beforeEach((done) => {
        comment = new Comment({
            postId: ObjectID("61ae68274b863b8712908d9e"),
            commentUser: "Jaan Laan",
            comment: "Test comment"
            });
        comment.save()
            .then(() => done());
    });

    it('Check if comment got added', (done) => {
        assert(!comment.isNew);
        done();
    });

});