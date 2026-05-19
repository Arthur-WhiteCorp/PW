function createLink(filename) {
  return `<a href="/${filename}">${filename}</a><br>\n`;
}

function returnLink(name) {
  return `<a href="/">${name}</a><br>\n`;
}

module.exports = {
  createLink,
  returnLink,
};
