module.exports = function(googleFontsId, opts) {
  opts.earlyAccess = opts.earlyAccess || false;
  const base = 'https://fonts.googleapis.com';

  if (typeof googleFontsId === 'string') {
    if (opts.earlyAccess === true) {
      return `${base}/earlyaccess/${googleFontsId
        .split(' ')
        .join('')
        .toLowerCase()}.css`;
    }

    return `${base}/css?family=${googleFontsId
        .split(' ')
        .join('+')}`;
  }
};
