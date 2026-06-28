#!/usr/bin/env bash
# One-time setup: allow public reads for S3 static website hosting.
# Usage: ./scripts/setup-s3-public-website.sh your-bucket-name
set -euo pipefail

BUCKET="${1:?Usage: $0 <bucket-name>}"
REGION="${AWS_REGION:-us-east-1}"
POLICY_FILE="$(mktemp)"

sed "s/YOUR_BUCKET_NAME/${BUCKET}/g" infra/s3-public-website-bucket-policy.json > "$POLICY_FILE"

echo "→ Disabling Block Public Access on s3://${BUCKET} …"
aws s3api put-public-access-block \
  --bucket "$BUCKET" \
  --public-access-block-configuration \
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

echo "→ Applying public read bucket policy …"
aws s3api put-bucket-policy --bucket "$BUCKET" --policy "file://${POLICY_FILE}"

echo "→ Enabling static website hosting (index.html / 404.html) …"
aws s3 website "s3://${BUCKET}" \
  --index-document index.html \
  --error-document 404.html

WEBSITE_URL="http://${BUCKET}.s3-website-${REGION}.amazonaws.com"
echo ""
echo "Done. Website endpoint:"
echo "  ${WEBSITE_URL}"
echo ""
echo "For a custom domain, point CloudFront to this bucket with OAC instead of public access."
echo "See infra/s3-cloudfront-oac-bucket-policy.json"

rm -f "$POLICY_FILE"
