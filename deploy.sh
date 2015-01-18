# bash

echo "############### START: GRUNT #################"
grunt -v
echo "############### END: GRUNT #################"

git add .
git add -u

echo "############### FILE CHANGES #################"
git status

echo "############### START: COMMIT and PUSH #################"
git commit -m "setting up deployment"
git push origin master
echo "############### END: COMMIT and PUSH #################"

version=cat bower.json | underscore select .version
echo "############### BOWER RELEASE: $version #################"
# git tag -a v0.0.2 -m "Release version 0.0.2"
