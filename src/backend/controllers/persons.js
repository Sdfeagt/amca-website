const router = require('express').Router()

const Blog = require('../models/person')

router.post('/', async (request, response) => {
  if (!request.user) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = request.user
  const blog = new Blog({ ...request.body, user: user.id })

  const savedBlog = await blog.save()

  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  const blogToReturn = await Blog
    .findById(savedBlog._id)
    .populate('user', { username: 1, name: 1 })

  response.status(201).json(blogToReturn)
})

module.exports = router