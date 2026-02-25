
export function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl
  });
}

export function errorHandler(err, req, res, next) {
  console.error('Error:', err.message);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal server error'
  });
}
