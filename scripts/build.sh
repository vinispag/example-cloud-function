rm -rf dist
mkdir dist
cp ./index.js ./dist/index.js
cp ./package.json ./dist/package.json
cp -r ./src ./dist/src

cd ./dist
zip -rmq build.zip ./





echo "Build Finalizado"
