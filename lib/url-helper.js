module.exports = {

  normalizeURL: function(url) {
    if (!url) return url;
    url = url.trim();
    if (url === '/') return url;
    return url.replace(/\/+$/, "");
  }

}