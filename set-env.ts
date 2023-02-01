const { writeFile } = require('fs');
// Your environment.custom.ts file. Will be ignored by git.
const targetPath = './src/environments/environment.custom.ts';
// Load dotenv to work with process.env
require('dotenv').config();
// environment.ts file structure
const envConfigFile = `
export const environment = {
 production: false,
 API_URL: '${process.env["API_URL"]}',
};
`;
writeFile(targetPath, envConfigFile, function (err: any) {
  if (err) {
    throw console.error(err);
  } else {
    console.log('Using custom environment');
  }
});