import mongoose from 'mongoose'
import config from './index.js'

const CONNECTION_URL = `mongodb://${config.db.url}/${config.db.name}`

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongo se conectou')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo foi reconectado')
})
mongoose.connection.on('error', error => {
  console.log('Mongo teve um erro', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo foi desconectado')
})