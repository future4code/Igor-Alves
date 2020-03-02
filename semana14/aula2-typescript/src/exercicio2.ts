type post = {
    userPost: string,
    author: string,
}

const firstPost:post = {
    userPost: "python",
    author: "Igor",
}

const secondPost:post = {
    userPost: "javascript",
    author: "Brendan",
}

const thirdPost:post = {
    userPost: "javascript",
    author: "Igor",
}

const fourthPost:post = {
    userPost: "ruby",
    author: "Yukihiro",
}

const fifthPost:post = {
    userPost: "python",
    author: "Guido",
}

const allPosts: post[] = [firstPost, secondPost, thirdPost, fourthPost, fifthPost]


function fetchAuthorPost( arrayPost: post[], author: string): post[] {
    let postsOfAuthor: post[] = []
    
    arrayPost.forEach( post => {
        if (post.author === author) {
            postsOfAuthor.push(post)
        }
    })

    return postsOfAuthor
}

console.log(fetchAuthorPost(allPosts, 'Igor'))



