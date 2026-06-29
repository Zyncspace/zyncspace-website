function _handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Skip if already has extension, is a file path, or API call
  if (uri.includes('.') || uri.startsWith('/api/') || uri.startsWith('/assets/')) {
    return request;
  }

  // Remove trailing slash (except for root)
  if (uri !== '/' && uri.endsWith('/')) {
    uri = uri.slice(0, -1);
  }

  // Skip root path - return index.html
  if (uri === '/') {
    request.uri = '/index.html';
    return request;
  }

  // Add .html extension for clean URLs
  // /features -> /features.html
  // /blog/my-post -> /blog/my-post.html
  request.uri = `${uri}.html`;

  return request;
}
