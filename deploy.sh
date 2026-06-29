#!/bin/bash
# ZyncSpace Deployment Script - deploys Next.js static export (out/) to S3 + CloudFront

set -e

BUCKET="zyncspace-india-client"
DISTRIBUTION_ID="E3CHPYYGTY866C"

echo "Building Next.js static export..."
export NEXT_PUBLIC_HOMEPAGE_VERSION="${NEXT_PUBLIC_HOMEPAGE_VERSION:-v2}"
export NEXT_PUBLIC_SHOW_HOMEPAGE_TOGGLE="${NEXT_PUBLIC_SHOW_HOMEPAGE_TOGGLE:-false}"
npm run build

echo "Deploying out/ to S3..."

# HTML and JSON/XML routes
aws s3 sync out/ "s3://$BUCKET/" \
  --delete \
  --exclude "css/*" \
  --exclude "_next/*" \
  --exclude "assets/*" \
  --cache-control "max-age=3600, public"

# Next.js hashed assets
aws s3 sync out/_next/ "s3://$BUCKET/_next/" \
  --delete \
  --cache-control "max-age=31536000, public"

# CSS
aws s3 sync out/css/ "s3://$BUCKET/css/" \
  --delete \
  --content-type "text/css" \
  --cache-control "max-age=86400, public"

# Images and static assets
aws s3 sync out/assets/ "s3://$BUCKET/assets/" \
  --delete \
  --cache-control "max-age=31536000, public"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*"

echo "Deployment complete!"
