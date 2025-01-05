#!/bin/bash
echo "<<<<<<<<<<<<<<<<<< @@@ >>>>>>>>>>>>>>>>>"
echo "Deleting old images"
rm -rf ../client/src/resources/pics

echo "<<<<<<<<<<<<<<<<<< @@@ >>>>>>>>>>>>>>>>>"
echo "Downloading images from S3"
aws s3 sync s3://pozeasociatie ../client/src/resources/pics

echo "<<<<<<<<<<<<<<<<<< @@@ >>>>>>>>>>>>>>>>>"
echo "Extracting images 2015-2022"
node ./src/sync2015-2022.js

echo "<<<<<<<<<<<<<<<<<< @@@ >>>>>>>>>>>>>>>>>"
echo "Extracting images 2023"
node ./src/sync2023.js

echo "<<<<<<<<<<<<<<<<<< @@@ >>>>>>>>>>>>>>>>>"
echo "Extracting images 2024"
node ./src/sync2024.js

echo "<<<<<<<<<<<<<<<<<< @@@ >>>>>>>>>>>>>>>>>"
echo "Generating components for 2024"
node ./src/generateComponents.js