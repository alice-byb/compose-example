exports.handler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'alive' }),
  };
};
