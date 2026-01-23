import express from 'express'
import { apiRouter } from './routes/apiRouter.js'


const PORT = 8000

const app = express()

app.use('/api', apiRouter)

app.use((req, res) => {
    res.status(400).json({
        message: "endpoint not found"
    })
})


app.listen(PORT, () => console.log(`server connected on port: ${PORT}`))