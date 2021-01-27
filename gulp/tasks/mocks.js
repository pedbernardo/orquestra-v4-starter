const log = require('fancy-log')
const jsonServer = require('json-server')
const config = require('../config')

const server = jsonServer.create()
const router = jsonServer.router(config.mocks.dbFile)
const middlewares = jsonServer.defaults()
const serverPort = config.mocks.port || getRandomInt(1000, 9999)
const delayInMs = config.mocks.delayInMs || 0

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min
}

server.use(middlewares)
server.use((req, res, next) => setTimeout(next, delayInMs))
server.use(config.mocks.path, router)

module.exports = function mocks (done) {
  server.listen(serverPort, () => {
    log.info(`JSON Server is running on http://localhost:${serverPort}${config.mocks.path}`)
    log.info(`Static files avaliable on http://localhost:${serverPort}`)
  })

  done()
}
