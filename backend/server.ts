import dotenv from 'dotenv'
import app from './src/index'

dotenv.config()
const port = process.env.PORT

app.listen(port, (): void => {
   console.log(`server listening on port ${port}`)
})
