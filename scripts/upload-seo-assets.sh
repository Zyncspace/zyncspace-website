#!/usr/bin/env bash
# Upload SEO-critical files with correct Content-Type and cache headers.
# Usage: ./scripts/upload-seo-assets.sh BUCKET_NAME
set -euo pipefail

BUCKET="${1:?S3 bucket name required}"
OUT="${2:-out}"

upload() {
  local file="$1"
  local content_type="$2"
  local cache="$3"
  if [ -f "$OUT/$file" ]; then
    aws s3 cp "$OUT/$file" "s3://$BUCKET/$file" \
      --content-type "$content_type" \
      --cache-control "$cache" \
      --only-show-errors
    echo "Uploaded $file ($content_type)"
  else
    echo "Warning: $OUT/$file not found" >&2
  fi
}

upload "robots.txt" "text/plain; charset=utf-8" "public,max-age=3600"
upload "sitemap.xml" "application/xml; charset=utf-8" "public,max-age=3600"
upload "feed.xml" "application/rss+xml; charset=utf-8" "public,max-age=3600"
upload "llms.txt" "text/plain; charset=utf-8" "public,max-age=3600"
upload "manifest.webmanifest" "application/manifest+json; charset=utf-8" "public,max-age=86400"

# Long-cache immutable static assets
if [ -d "$OUT/_next" ]; then
  aws s3 sync "$OUT/_next/" "s3://$BUCKET/_next/" \
    --delete \
    --cache-control "public,max-age=31536000,immutable" \
    --only-show-errors
fi

if [ -d "$OUT/assets" ]; then
  aws s3 sync "$OUT/assets/" "s3://$BUCKET/assets/" \
    --delete \
    --cache-control "public,max-age=31536000" \
    --only-show-errors
fi

echo "SEO assets and static caches configured for s3://$BUCKET"
