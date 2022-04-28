const uuid = require('uuid');

exports.handler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'alive', uuid: uuid() }),
  };
};
