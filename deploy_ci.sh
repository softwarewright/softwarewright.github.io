#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'https://softwarewright.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

echo "Pushing code to deploy"
git push -f https://softwarewright:${GH_TOKEN}@github.com/softwarewright/softwarewright.github.io.git HEAD:master

cd -