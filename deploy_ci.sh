#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'https://softwarewright.dev' > CNAME

git config --global user.email "softwarebywright@gmail.com"
git config --global user.name "Software Wright"

git init
git add -A
git commit -m 'deploy'
git push -f https://softwarewright:${GH_TOKEN}@github.com/softwarewright/softwarewright.github.io.git HEAD:master

cd -