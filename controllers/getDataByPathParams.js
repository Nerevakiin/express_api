import { startups } from '../data/data.js'

export const getDataByPathParams = (req, res) => {

    const { field, term } = req.params // better to destructure it

    const allowedFields = ['country', 'continent', 'industry'] // the non boolean fields 

    
    // if the client's field included in the allowed array then serve the error object and chain it with the status code. Return it so it code stops here
    if (!allowedFields.includes(field)) {
        return res.status(400).json(
            {message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" }
        )
    }

    
    
    const filteredData = startups.filter(
        startup => startup[field].toLowerCase() === term.toLowerCase()
    )

    res.json(filteredData

    )
}