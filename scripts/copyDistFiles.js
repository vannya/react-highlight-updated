var path = require("path");
var fse = require("fs-extra");

const files = ["README.md", "LICENSE.txt"];

// Copy files to the dist directory
Promise.all(files.map(file => copyFile(file))).then(() => createPackageFile());

// Copies the file
function copyFile(file) {
  const distPath = resolveBuildPath(file);
  return new Promise(resolve => {
    fse.copy(file, distPath, err => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Copied ${file} to ${distPath}`));
}

// Returns the dist folder path
function resolveBuildPath(file) {
  return path.resolve(__dirname, "../dist", path.basename(file));
}

// Create a package.json in the dist folder
function createPackageFile() {
  return new Promise(resolve => {
    fse.readFile(
      path.resolve(__dirname, "../package.json"),
      "utf8",
      (err, data) => {
        if (err) {
          throw err;
        }

        resolve(data);
      }
    );
  })
    .then(data => JSON.parse(data))
    .then(packageData => {
      const {
        name,
        version,
        description,
        homepage,
        keywords,
        repository,
        license,
        bugs,
        peerDependencies,
        dependencies
      } = packageData;

      const minimalPackage = {
        name,
        version,
        description,
        homepage,
        main: "./index.js",
        keywords,
        repository,
        license,
        bugs,
        peerDependencies,
        dependencies
      };

      return new Promise(resolve => {
        const distPath = path.resolve(__dirname, "../dist/package.json");
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(distPath, data, err => {
          if (err) throw err;
          console.log(`Created package.json in ${distPath}`);
          resolve();
        });
      });
    });
}
