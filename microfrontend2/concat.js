//this is created because in microfront we share only one file 
//so below will concat all build files in one

const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-http-request/runtime.js",
    "./dist/angular-http-request/polyfills.js",
    "./dist/angular-http-request/main.js",
  ];
  await concat(files, "./dist/angular-http-request/angular-http-request.js");
})();
