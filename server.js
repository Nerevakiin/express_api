import express from 'express'

const PORT = 8000

const app = express()

const celebrity = {
  type: "action hero",
  name: "JSON Statham"
}

app.get('/', (req,res) => { // having req first and res second apparently is important
    res.json(celebrity)
})

app.listen(PORT, () => console.log(`server connected on port: ${PORT}`))