## mongodb://localhost:27017



rm -rf node_modules
rm -f package-lock.json # or yarn.lock if using Yarn
npm cache clean --force
npm install

rm -rf node_modules
rm package-lock.json # or yarn.lock
npm install # or yarn install