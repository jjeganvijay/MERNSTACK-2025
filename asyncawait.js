async function asyncExample() {
    setTimeout(() => {
        console.log("Executing Timeout Function");
    }, 5000);
    return "Demonstration of async/await";
}

console.log(asyncExample());

asyncExample().then(function(result) {
    console.log(result);
});

// Instagram-like functionality example
postComment = async () => {
    return new Promise((resolveComment) => {
        setTimeout(() => {
            resolveComment("Comment successfully added to the post");
        }, 5000);
    });
};

addLike = async () => {
    return new Promise((resolveLike) => {
        setTimeout(() => {
            resolveLike("Post liked successfully");
        }, 2000);
    });
};

async function generatePost() {
    const createNewPost = new Promise((resolvePost) => {
        setTimeout(() => {
            resolvePost("New post created");
        }, 1000);
    });

    const [postStatus, likeStatus, commentStatus] = await Promise.all([
        createNewPost,
        addLike(),
        postComment(),
    ]);

    console.log(postStatus);
    console.log(likeStatus);
    console.log(commentStatus);
}

generatePost();
