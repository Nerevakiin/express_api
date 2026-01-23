import express from 'express'
import { apiRouter } from './routes/apiRouter.js'
import cors from 'cors'


const PORT = 8000

const app = express()

app.use(cors()) // CORS allow us to deploy our backend so others can also interact with it

app.use('/api', apiRouter) // all the logic that handles the backend


// fallback if user enters wrong/non supported url
app.use((req, res) => {
    res.status(400).json({
        message: "endpoint not found"
    })
})


app.listen(PORT, () => console.log(`server connected on port: ${PORT}`))