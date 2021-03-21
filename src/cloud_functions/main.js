/**
 * Responds to any HTTP request.
 *
 * @param {object} req  HTTP request context.
 * @param {object} resp HTTP response context.
 */
// eslint-disable-next-line consistent-return
exports.main = (req, resp) => {
  try {

    return resp
      .status(200)
      .send(req.body);
  } catch (e) {
    return resp.status(500).send(`Exception.. Please contact @kame_greenergy: ${e.message}`);
  }
};

const reqBody = body => {
  return body;
}

module.exports = reqBody;
