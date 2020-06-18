const scan = require('../models/scans')

function getAll () {
  return scan.find().populate('scanedBy').populate('product').exec()
}

function getByQr (qr) {
  return scan.findOne({ qr })
}

async function create (scanData) {
  const scanDone = await scan.create(scanData)
  const fullScanInfo = await scan.findById(scanDone._id).populate('product').populate('promotion')
  return fullScanInfo
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
  getByQr,
  create,
  deleteById,
  updateById,
  getScanByUserAndPromotionId

}
