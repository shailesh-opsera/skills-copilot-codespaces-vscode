// Create web server
// Create a route that returns all comments
// Create a route that returns a comment by id
// Create a route that returns comments by user
// Create a route that returns comments by post

// Create a route that returns all comments
app.get('/comments', (req, res) => {
    res.json(comments)
})

// Create a route that returns a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id))
    if (!comment) return res.status(404).send('The comment with the given ID was not found')
    res.json(comment)
})

// Create a route that returns comments by user
app.get('/comments/user/:id', (req, res) => {
    const userComments = comments.filter(c => c.userId === parseInt(req.params.id))
    if (!userComments) return res.status(404).send('The user with the given ID was not found')
    res.json(userComments)
})

// Create a route that returns comments by post
app.get('/comments/post/:id', (req, res) => {
    const postComments = comments.filter(c => c.postId === parseInt(req.params.id))
    if (!postComments) return res.status(404).send('The post with the given ID was not found')
    res.json(postComments)
})