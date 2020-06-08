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

module.exports = {
  scansBetwenTwoDates,
  scansByDate
}
