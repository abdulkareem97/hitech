import Koa from 'koa'
import bodyParser from 'koa-body'

const app = new Koa()

app.use(bodyParser({
  multipart: true,
}))

export default app.callback()
