const escaneo = require('../models/escaneos')



async function getAll () {
    const allScans = await escaneo.find()
    return allScans

}

async function create (scanData) {
   const scanDone = await escaneo.create(scanData)
   return scanDone
}


function deleteById (id) {
    return escaneo.findByIdAndRemove(id)
  }
  
  function updateById (id, scanData) {
    return escaneo.findByIdAndUpdate(id, scanData)
  }
  
module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}