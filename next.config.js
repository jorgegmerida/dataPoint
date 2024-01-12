/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@mui/x-charts",
  "@mui/x-data-grid",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
