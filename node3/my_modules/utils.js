export function createLink(filename) {
  return `<a href="/${filename}">${filename}</a><br>\n`;
}

export function returnLink(name) {
  return `<a href="/">${name}</a><br>\n`;
}

export default {
  returnLink,
  createLink,
};
