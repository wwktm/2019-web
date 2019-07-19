var CouponCodes = {
  "WWFEMALE" : {
    "npr": "2000",
    "usd": "30"
  },
}
var rate = {
  "npr" : "3500",
  "usd" : "40"
}

require('dotenv').config()
exports.handler = function(event, context, callback) {

  const defaultResponse = () => {
    callback(null,{
      statusCode:200,
      body: JSON.stringify(rate)
    });
  }

  const runId = Date.now()
  .toString()
  .slice(-5)
  const log = (...args) => console.log(runId, ...args)

  var coupon_code = '';

  try {
    var body = JSON.parse(event.body)

    if(!body.coupon_code){
      return defaultResponse()
    }
    coupon_code = body.coupon_code
  } catch (e) {
    return defaultResponse()
  }

  body.timestamp = Date.now()

  const apiKey = getEnv('AIRTABLE_KEY')
  const base = getEnv('AIRTABLE_BASE')
  const Airtable = require('airtable')
  var airtable= new Airtable({apiKey}).base(base)('Coupon Code');
  var filterParams = {
    filterByFormula: `{name} = "${coupon_code}"`,
    maxRecords: 1
  }

  airtable.select(filterParams).eachPage(function (records, pageNext) {
    var record = records[0]
    if(record === undefined || record.get('available') !== true) {
      return defaultResponse()
    }

    callback(null,{
      statusCode:200,
      body: JSON.stringify({
        npr : record.get('npr'),
        usd : record.get('usd')
      })
    });
    return
  })
}

function getEnv(name, defaultValue) {
  return process.env[name] || defaultValue
}
