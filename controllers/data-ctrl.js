const Data = require('../models/data-model')

createData = (req, res) => {
    const body = req.body

    //si req esta vacio
    if (!body){
        return res.status(400).json({
            success: false, 
            error: 'Debe enviar datos!'
        })
    }

    const data = new Data(body)

    if (!data){
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    data
        .save()
        .then(()=> {
            return res.status(200).json({
                success: true,
                id: data._id,
                message: 'Data Agregada!'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Data no ha sido agregada!'
            })
        })
}

getData = async (req, res) => {
    await Data.find({}, (err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err,
            })
        }

        if(!data.length){
            return res.status(400).json({
                success: false,
                error:'Data no encontrada'
            })
        }
        return res.status(200).json({ success: true, data: data })
    }).catch(err => console.log(err))
}

//Add a delete operation .

module.exports = {
    createData,
    getData,
}