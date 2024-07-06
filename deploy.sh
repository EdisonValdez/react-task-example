#!/usr/bin/env sh

# abort on errors
set -e

#build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying in to a custom domain
# echo 'www.domain.com' > CNAME


git init
git checkout -b main
git add -A
git commit -m "deploy"

# if deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:EdisonValdez/react-task-example.git main:gh-pages


cd -


