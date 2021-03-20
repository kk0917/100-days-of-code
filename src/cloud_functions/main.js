/**
 * Responds to any HTTP request.
 *
 * @param {object} req  HTTP request context.
 * @param {object} resp HTTP response context.
 */
// eslint-disable-next-line consistent-return
exports.main = (req, resp) => {
  try {

    console.log(JSON.stringify(req));

    return resp
      .status(200)
      .send(JSON.stringify(req));
  } catch (e) {
    return resp.status(500).send(`Exception.. Please contact @kame_greenergy: ${e.message}`);
  }
};
