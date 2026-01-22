import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

const app = express()


app.get('/', (req,res) => { // having req first and res second apparently is important
    
    let filteredData = startups

    const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

    if (industry) {
        filteredData = filteredData.filter(startup =>
             startup.industry.toLowerCase() === industry.toLowerCase())
    }

    if (country) {
        filteredData = filteredData.filter(startup =>
             startup.country.toLowerCase() === country.toLowerCase())
    }

    if (continent) {
        filteredData = filteredData.filter(startup =>
             startup.continent.toLowerCase() === continent.toLowerCase())
    }

    
    
    // convert the strings to booleans
    if (is_seeking_funding) {
        filteredData = filteredData.filter(startup =>
             startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())) // for these occasions, JSON.parse converts string to boolean
    }

    if (has_mvp) {
        filteredData = filteredData.filter(startup =>
             startup.has_mvp === JSON.parse(has_mvp.toLowerCase()))
    }


    
    res.json(filteredData)
})



app.get('/api/:field/:term', (req, res) => {

    const { field, term } = req.params // better to destructure it

    const filteredData = startups.filter(
        startup => startup[field].toLowerCase() === term.toLowerCase()
    )

    res.json(filteredData

    )
})

app.listen(PORT, () => console.log(`server connected on port: ${PORT}`))