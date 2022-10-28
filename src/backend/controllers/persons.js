const router = require('express').Router()

const Person = require('../models/person')

router.post('/', async (request, response) => {
  console.log("In post");
  const blog = new Person({ ...request.body})
  console.log("New person obj: ", request.body);

  const savedBlog = await blog.save()

  const blogToReturn = await Person
    .findById(savedBlog._id)

  response.status(201).json(blogToReturn)
})

module.exports = router