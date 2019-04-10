
rm -rf build/
npm run build

aws s3 sync --profile=portfolio build/ s3://ericmmurray.com --acl public-read
rm -rf build/
echo "Page deployed to: http://ericmmurray.com.s3-website-us-east-1.amazonaws.com/"