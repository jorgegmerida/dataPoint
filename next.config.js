/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@mui/x-data-grid",
  "@mui/styles",
  "@mui/x-date-pickers",
  "@material-ui/pickers",
  "@date-io/date-fns",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
