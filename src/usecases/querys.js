const scan = require('../models/scans')

async function scansByDate (date) {
  const allScans = await scan.find(
    {
      scanDate: {
        $gte: date.startOf('day').toDate(),
        $lte: date.endOf('day').toDate()
      }
    }
  ).populate('scanedBy').populate('product').exec()
  return allScans
}

async function countScans () {
  const countedScans = await scan.countDocuments()
  return countedScans
}

async function countScansByProduct (id, promo_id) {
  const countedScansByProduct = await scan.countDocuments({ product: id, promotion: promo_id }).populate('scanedBy').populate('product').exec()
  return countedScansByProduct
}

async function countScansByUser (id) {
  const countedScansByProduct = await scan.countDocuments({ scanedBy: id }).populate('scanedBy').populate('product').exec()
  return countedScansByProduct
}

async function productScansByDate (date, promo_id, product_id) {
  const allScans = await scan.countDocuments(
    {
      promotion: promo_id,
      product: product_id,
      scanDate: {
        $gte: date.startOf('day').toDate(),
        $lte: date.endOf('day').toDate()
      }
    }
  ).populate('scanedBy').populate('product').exec()
  return allScans
}

module.exports = {
  countScans,
  countScansByUser,
  countScansByProduct,
  scansByDate,
  productScansByDate
}
