require('dotenv').config()

exports.handler = function(event, context, callback) {
  console.log("here")
  const runId = Date.now()
  .toString()
  .slice(-5)
  const log = (...args) => console.log(runId, ...args)

  try {
    var body = JSON.parse(event.body)
  } catch (e) {
    log('invalid body')
  }

  body.timestamp = Date.now()

  const apiKey = getEnv('AIRTABLE_KEY')
  const base = getEnv('AIRTABLE_BASE')
  const table = getEnv('AIRTABLE_TABLE', 'Registrations')
  const Airtable = require('airtable')
  var airtable= new Airtable({apiKey}).base(base)(table);

  log('inserting to airtable')
  airtable.create(body, function(err, record){
    if(err){
      log(err)
      callback(null,{
        statusCode:500,
        body: JSON.stringify({"err":"err"})
      });
      return
    }
    callback(null,{
      statusCode:200,
      body: JSON.stringify({record: record.getId()})
    });
    log(record.getId())
  })

}

function getEnv(name, defaultValue) {
  return process.env[name] || defaultValue
}
