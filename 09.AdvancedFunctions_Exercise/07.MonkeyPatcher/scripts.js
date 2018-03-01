function solution(input) {

    let instructions = {
        upvote: () => {
            this.upvotes += 1;
        },
        downvote: () => {
            this.downvotes += 1;
        },
        score: () => {
            let postType = '';
            let obfuscate = this.downvotes + this.upvotes > 50;
            let sum = this.upvotes - this.downvotes;

            if (sum >= 0) {
                if (this.upvotes > this.downvotes + this.upvotes * 0.66) {
                    postType = 'hot';
                } else {
                    postType = 'controversial';
                }
            }
            else if (sum < 0) {
                postType = 'unpopular';
            }
            else if (this.upvotes < 10 || this.downvotes < 10){
                postType = 'new'
            }
            let obj;
            if (obfuscate) {
                let max = Math.ceil(Math.max(this.downvotes, this.upvotes) * 0.25);
                obj =  [this.upvotes + max,this.downvotes + max, this.upvotes - this.downvotes,postType];
                console.log(obj.join(', '));
                return obj;
            }else{
                obj =  [this.upvotes, this.downvotes,this.upvotes - this.downvotes, postType];
                console.log(obj.join(', '));
                return obj;
            }
        }
    };
    return instructions[input]();
}

let post = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 4,
    downvotes: 5
};




var answer = solution.call(post, 'score');
var expected = [4, 5, -1, 'new'];
console.log(expected);
solution.call(post, 'downvote');
answer = solution.call(post, 'score');
expected = [4, 6, -2, 'unpopular'];
console.log(expected);
solution.call(post, 'upvote');
solution.call(post, 'upvote');
answer = solution.call(post, 'score');
expected = [6, 6, 0, 'new'];
console.log(expected);
// 38 Upvotes
for (let i = 0; i < 38; i++) {
    solution.call(post, 'upvote');
}
answer = solution.call(post, 'score');
expected = [44, 6, 38, 'hot'];
console.log(expected);
// Past obfuscation threshold
solution.call(post, 'downvote');
answer = solution.call(post, 'score');
expected = [55, 18, 37, 'hot'];
console.log(expected);
// Bellow hot threshold
post.upvotes = 132;
post.downvotes = 68;

answer = solution.call(post, 'score');
expected = [165, 101, 64, 'controversial'];
console.log(expected);
// Past hot threshold
post.upvotes = 133;

answer = solution.call(post, 'score');
expected = [167, 102, 65, 'hot'];
console.log(expected);