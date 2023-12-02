import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err)
  switch (err.name) {
    case 'CastError':
      return res.status(400).send({ error: true, message: 'Invalid ID' })
    case 'ValidationError':
      return res.status(400).send({ error: true, message: 'Invalid type' })
    case 'NotFound':
      return res.status(404).send({ error: true, message: 'Not found' })
    case 'FieldsMissing':
      return res.status(400).send({ error: true, message: 'Fields missing' })
    default:
      return res
        .status(500)
        .send({ error: true, message: 'Internal Server Error' })
  }
  next(err)
}

export default errorHandler
