const promotion = require('../models/promotions')



async function getAll () {
    const allScans = await promotion.find().populate('productInfo').exec()
    return allScans

}

async function create (scanData) {
   const scanDone = await promotion.create(scanData)
   return scanDone
}


function deleteById (id) {
    return promotion.findByIdAndRemove(id)
  }
  
  function updateById (id, scanData) {
    return promotion.findByIdAndUpdate(id, scanData)
  }
  
module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}