const scan = require('../models/scans')

async function getAll () {
  const allScans = await scan.find().populate('scanedBy').populate('product').exec()
  return allScans
}

async function create (scanData) {
  const scanDone = await scan.create(scanData)
  return scanDone
}

function deleteById (id) {
  return scan.findByIdAndRemove(id)
}

function updateById (id, scanData) {
  return scan.findByIdAndUpdate(id, scanData)
}

function getScanByUserAndPromotionId (userId, promotionId) {
  return scan.find({
    promotion: promotionId,
    scanedBy: userId
  })
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getScanByUserAndPromotionId

}
