#!/bin/bash

# ZyncSpace Deployment Script
# Sets cache headers for optimal browser caching

BUCKET="zyncspace-india-client"
DISTRIBUTION_ID="E3CHPYYGTY866C"

echo "Deploying to S3..."

# Upload HTML files with 1 hour cache
echo "Setting HTML cache headers (max-age=3600)..."
aws s3 cp --recursive \
  --exclude "css/*" \
  --exclude "js/*" \
  --exclude "assets/images/*" \
  --exclude "assets/images-compressed/*" \
  --exclude ".git/*" \
  --exclude ".github/*" \
  --exclude ".DS_Store" \
  --exclude "deploy.sh" \
  --cache-control "max-age=3600, public" \
  . s3://$BUCKET/

# Upload CSS files with 1 day cache
echo "Setting CSS cache headers (max-age=86400)..."
aws s3 cp --recursive \
  --content-type "text/css" \
  --cache-control "max-age=86400, public" \
  css/ s3://$BUCKET/css/

# Upload JS files with 1 day cache
echo "Setting JS cache headers (max-age=86400)..."
aws s3 cp --recursive \
  --content-type "application/javascript" \
  --cache-control "max-age=86400, public" \
  js/ s3://$BUCKET/js/

# Upload images with 1 year cache
echo "Setting image cache headers (max-age=31536000)..."
aws s3 cp --recursive \
  --exclude "*" \
  --include "*.png" \
  --include "*.jpg" \
  --include "*.jpeg" \
  --include "*.gif" \
  --include "*.svg" \
  --include "*.webp" \
  --include "*.ico" \
  --cache-control "max-age=31536000, public" \
  assets/images/ s3://$BUCKET/assets/images/

aws s3 cp --recursive \
  --exclude "*" \
  --include "*.png" \
  --include "*.jpg" \
  --include "*.jpeg" \
  --include "*.gif" \
  --include "*.svg" \
  --include "*.webp" \
  --cache-control "max-age=31536000, public" \
  assets/images-compressed/ s3://$BUCKET/assets/images-compressed/

echo "Deployment complete!"
