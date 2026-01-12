#!/bin/bash

echo "<<<<<<<<<<<<<<<<<< @@@ >>>>>>>>>>>>>>>>>"
echo "Checking for AWS CLI and credentials"

if ! command -v aws >/dev/null 2>&1; then
	echo "ERROR: 'aws' CLI not found. Install the AWS CLI before running this script." >&2
	echo "See: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html" >&2
	exit 1
fi

# Validate that credentials/profile work by calling STS
if ! aws sts get-caller-identity >/dev/null 2>&1; then
	echo "fatal error: Unable to locate credentials" >&2
	echo "Please provide AWS credentials before running this script. Options:" >&2
	echo " - Run 'aws configure' and enter your access key + secret" >&2
	echo " - Export environment variables: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY" >&2
	echo " - Use an AWS profile: export AWS_PROFILE=yourprofile" >&2
	echo "Example: AWS_PROFILE=default ./sync_s3.sh" >&2
	exit 1
fi

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