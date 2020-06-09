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


async function scansPerDayBetwen(){

  // var date1 = new Date("06/30/2019"); 
  // var date2 = new Date("07/30/2019"); 
    
  // // To calculate the time difference of two dates 
  // var Difference_In_Time = date2.getTime() - date1.getTime(); 
    
  // // To calculate the no. of days between two dates 
  // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

  // let diaUno = 4
  // let diaDos = 6
  // let diference = diaDos - diaUno

  // const scansArray = []

  // for (const i in Difference_In_Days) {
  //   scansArray[i]=firstDay+i
  // }

  // var daysArray = scansArray.map(function (day, index, array) {
  //   return  year.toString() + month.toString() + (day + index).toString(); 
  // });

  // console.log(scansArray)
  // console.log(daysArray)


  const dailyScans = await scan.countDocuments({
    $or: [
      { // range 1
        scanDate: { $gte: '2020-06-05', $lt: '2020-06-07' }
      }
      // { // range 2
      //   scanDate: { $gte: '2020-06-06', $lt: '2020-06-08' }
      // },
      // { // range 2
      //   scanDate: { $gte: '2020-06-07', $lt: '2020-06-09' }
      // }
    ]
  }).populate('scanedBy').populate('product').exec()
  return dailyScans
}

// var anand = new userModel({ name: 'anand', password: 'abcd'});
// anand.save(function (err, docs) {
//   if (err) {
//       console.log('Error');
//   } else {
//       userModel.countDocuments({name: 'anand'}, function(err, c) {
//           console.log('Count is ' + c);
//      });
//   }
// }); 

  
//   return countedScans
// }


async function countScansByHour(){
  
  const allScans = await scan.aggregate([
    {
    hour: {  $hour: "$scanDate"  } 
    },
    {
      hour:{ $eq:1}
    }
  ]).populate('scanedBy').populate('product').exec()
  return allScans
}

module.exports = {
  scansBetwen,
  countScans,
  countScansByUser,
  countScansByProduct,
  scansPerDayBetwen,
  countScansByHour
}