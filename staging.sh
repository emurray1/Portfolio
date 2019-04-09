
rm -rf build/
npm run build

aws s3 sync --profile=eric.murray build/ s3:http://ericmmurray.com.s3-website-us-east-1.amazonaws.com/ --acl public-read
rm -rf build/
echo "Page deployed to: http://ericmmurray.com.s3-website-us-east-1.amazonaws.com/"