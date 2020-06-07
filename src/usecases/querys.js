const scan = require('../models/scans')



async function scansBetwen () {
    const allScans = await scan.find(
      { 
      scanDate: { $gte: '2020-06-06', $lte: '2020-06-09' 
      } 
      }
    ).populate('scanedBy').populate('product').exec()
    return allScans

}


module.exports = {
  scansBetwen
}