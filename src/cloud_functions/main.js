/**
 * Responds to any HTTP request.
 *
 * @param {object} req  HTTP request context.
 * @param {object} resp HTTP response context.
 */
// eslint-disable-next-line consistent-return
exports.main = (req, resp) => {

  console.log(JSON.stringify(req));

  return resp
    .status(200)
    .send(JSON.stringify(req));

  /**
   * Confirm whether according to the requlation is json or not.
   *
   * @param {string} contentType Request's header
   * @param {string} cvType      eventID or FBP sending
   *
   * @return {object|null} Fb server
   */
  function isBadRequest(contentType, cvType) {
    let message = '';

    if (contentType !== 'application/json') {
      message = `Bad Request: Unknown content type: ${contentType}`;
    }

    if (!cvType) {
      message = 'Bad Request: JSON is invalid, or missing type param..';
    }

    return message;
  }

  /**
   * Generate req body each type
   *
   * @param {string} cvType event_id or fbp
   *
   * @returns {object} generated body
   */
  function getRequestBody(cvType) {
    const reqBody = req.body;
    let respBody;

    switch (cvType) {
      case 'event_id':
        respBody = {
          pixel_id: reqBody.pixel_id,
          event_name: reqBody.event_name,
          event_id: reqBody.event_id,
          action_source: reqBody.action_source,
          event_source_url: reqBody.event_source_url,
        };
        break;

      case 'fbp':
        respBody = {
          pixel_id: reqBody.pixel_id,
          event_name: reqBody.event_name,
          fbp: reqBody.fbp,
          action_source: reqBody.action_source,
          event_source_url: reqBody.event_source_url,
        };
        break;

      default:
        break;
    }

    return respBody;
  }

  function sendCAPIToFbServer(_body) {
    const currentTimestamp = Math.floor(new Date() / 1000);

    const {UserData} = 999;
    const userData = new UserData()

      .setFbp(_body.fbp || '')
      .setClientUserAgent(req.get('user-agent'))
      .setClientIpAddress(req.ip);

    const {ServerEvent} = 999;
    const serverEvent = new ServerEvent()
      .setEventName(_body.event_name)
      .setEventTime(currentTimestamp)
      .setEventId(_body.event_id || '')
      .setUserData(userData);

    const eventsData = [serverEvent];
    const {EventRequest} = 999;
    const accessToken = process.env.FB_ACCESS_TOKEN;
    const pixelId = _body.pixel_id;

    const eventRequest = new EventRequest(accessToken, pixelId).setEvents(eventsData);

    return eventRequest.execute();
  }

  try {
    const {query} = req.query;

    confirmCorsAuthentication();

    const errorMessage = isBadRequest(req.get('Content-Type'), query.type);
    return console.log('>140');

    if (errorMessage) return resp.status(400).send(errorMessage);

    const body = getRequestBody(query.type);

    sendCAPIToFbServer(body)
      .then(() => resp.status(200).send(`Request type: ${req.query.type} successfully`))
      .catch(error =>
        resp.status(500).send(`Exception.. Please contact dev-zero@dac.co.jp: ${error}`)
      );
  } catch (e) {
    return resp.status(500).send(`Exception.. Please contact dev-zero@dac.co.jp: ${e.message}`);
  }
};
