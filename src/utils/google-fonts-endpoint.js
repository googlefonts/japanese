module.exports = function(google_fonts_id, opts) {
  opts.earlyAccess = opts.earlyAccess || false
  const base = 'https://fonts.googleapis.com'

  if (typeof google_fonts_id === 'string') {
    if (opts.earlyAccess === true) {
      return `${base}/earlyaccess/${google_fonts_id
        .split(' ')
        .join('')
        .toLowerCase()}.css`;
    }
    
    return `${base}/css?family=${google_fonts_id
        .split(' ')
        .join('+')}`;
  }
}
