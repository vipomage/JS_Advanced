function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(' * ' + comment);
        }

        toString() {
            if (this.comments.length > 0) {
                let test = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments: \n${this.comments.join('\n')}`;
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:\n${this.comments.join('\n')}`
            } else {
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`
            }
        }
    }

    class BlogPost extends Post {
        constructor(name, title, views) {
            super(name, title);
            this.views = views;
        }

        view() {
            this.views+=1;
            return this
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

    return {Post,SocialMediaPost,BlogPost}
}
let classes = solve();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();
console.log(test.toString());