module.exports = {
  "./index.js": ["npm run lint:js", "npm run test -- --bail --findRelatedTests"],
  "./utils/**/*.js": ["npm run lint:js", "npm run test -- --bail --findRelatedTests"],
};
