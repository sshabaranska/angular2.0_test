/**
 * Error responses
 */

'use strict';

module.exports[404] = function pageNotFound(req, res) {
  let view = '<h1>Not found <span>:(</span></h1>';
  let statusCode = 404;
  let result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(view, (err) => {
    if (err) { return res.json(result, result.status); }

    res.render(view);
  });
};
