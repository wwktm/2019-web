var CouponCodes = {
  "WWFEMALE" : {
    "npr": "2000",
    "usd": "30"
  },
}

exports.handler = function(event, context, callback) {
  var rate = {
    "npr" : "2750",
    "usd" : "30"
  }

  try {
    var body = JSON.parse(event.body)

    if(body.coupon_code && CouponCodes[body.coupon_code]) {
      rate = CouponCodes[body.coupon_code]
    }
  } catch (e) {
    // ignore that shit
  }

  callback(null,{
    statusCode:200,
    body: JSON.stringify(rate)
  });
}
