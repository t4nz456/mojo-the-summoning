const request = require('supertest')
const app = require('../app')
const { describe, test, expect, beforeAll } = require('@jest/globals')
const db = require('../config')

beforeAll(async () => await db.sync({ force: true }))

let user

describe('/user', () => {
  test('POST /', async () => {
    const res = await request(app)
      .post('/user')
      .send({
        username: 'hermione'
      })
      .set('Accept', 'application/json')

    user = res.body

    expect(res.status).toBe(201)
    expect(user.username).toBe('hermione')
    expect(user).toHaveProperty('id')
  })

  test('GET /id', async () => {
    const res = await request(app)
      .get(`/user/${user.id}`)
      .set('Accept', 'application/json')
    expect(res.status).toBe(200)
  })

  test('PUT /id', async () => {
    const res = await request(app)
      .put(`/user/${user.id}`)
      .send({ username: 'granger' })
      .set('Accept', 'application/json')
    expect(res.status).toBe(200)
    expect(res.body.username).toBe('granger')
  })

  test('DELETE /id', async () => {
    await request(app).delete(`/user/${user.id}`)
    const res = await request(app).get(`/user/${user.id}`)
    expect(res.status).toBe(404)
  })
})
