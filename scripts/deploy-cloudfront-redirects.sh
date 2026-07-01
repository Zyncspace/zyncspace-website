#!/usr/bin/env bash
# Publish the generated CloudFront viewer-request function (run after build).
# Requires: AWS CLI, CLOUDFRONT_DISTRIBUTION_ID, CLOUDFRONT_FUNCTION_NAME (optional).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FUNCTION_FILE="${ROOT}/infra/cloudfront/viewer-request.generated.js"
FUNCTION_NAME="${CLOUDFRONT_FUNCTION_NAME:-zyncspace-seo-redirects}"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"

if [ ! -f "$FUNCTION_FILE" ]; then
  echo "Error: $FUNCTION_FILE not found. Run npm run build first." >&2
  exit 1
fi

echo "Publishing CloudFront function: ${FUNCTION_NAME}"

# Create function on first run, or update existing
if aws cloudfront describe-function --name "$FUNCTION_NAME" >/dev/null 2>&1; then
  ETAG=$(aws cloudfront describe-function --name "$FUNCTION_NAME" --query 'ETag' --output text)
  ETAG=$(aws cloudfront update-function \
    --name "$FUNCTION_NAME" \
    --if-match "$ETAG" \
    --function-config "Comment=ZyncSpace SEO redirects,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://${FUNCTION_FILE}" \
    --query 'ETag' --output text)
  aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$ETAG"
else
  ETAG=$(aws cloudfront create-function \
    --name "$FUNCTION_NAME" \
    --function-config "Comment=ZyncSpace SEO redirects,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://${FUNCTION_FILE}" \
    --query 'ETag' --output text)
  aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$ETAG"
fi

echo "CloudFront function published."

if [ -z "$DISTRIBUTION_ID" ]; then
  echo "Set CLOUDFRONT_DISTRIBUTION_ID and attach the function in the CloudFront console:"
  echo "  Behaviors → Default → Function associations → Viewer request → ${FUNCTION_NAME}"
  exit 0
fi

echo "Associate ${FUNCTION_NAME} with distribution ${DISTRIBUTION_ID} in the AWS console if not already linked."
echo "Then invalidate: aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths '/*'"
