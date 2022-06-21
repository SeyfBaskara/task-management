import 'dotenv/config'
import app from './src/index'

const port = process.env.PORT

app.listen(port, (): void => {
   console.log(`server listening on port ${port}`)
})
