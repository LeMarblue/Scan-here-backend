const scan = require('../models/scans')

async function scansByDate (date) {
  const allScans = await scan.find(
    {
      scanDate: {
        $eq: date
      }
    }
  ).populate('scanedBy').populate('product').exec()
  return allScans
}

async function scansBetwenTwoDates (startDate, endDate) {
  const allScans = await scan.find(
    {
      scanDate: {
        $gte: startDate, $lte: endDate
      }
    }
  ).populate('scanedBy').populate('product').exec()
  return allScans
}

async function countScans(){
  const countedScans = await scan.countDocuments()
  return countedScans
}


async function countScansByProduct(id){
  const countedScansByProduct = await scan.countDocuments({product : id}).populate('scanedBy').populate('product').exec()
  return countedScansByProduct
}


async function countScansByUser(id){
  const countedScansByProduct = await scan.countDocuments({scanedBy : id}).populate('scanedBy').populate('product').exec()
  return countedScansByProduct
}


module.exports = {
  countScans,
  countScansByUser,
  countScansByProduct,
  scansBetwenTwoDates,
  scansByDate
}
