#!/bin/bash
# Copyright (c) 2015, Cloudera, inc.

DIR=$(readlink -f $(dirname "$BASH_SOURCE"))
cd $DIR

set -e

if ! git diff-index --quiet HEAD ; then
  echo Must run in a clean git directory
  exit 1
fi

OUT=kudu-trace-viewer-$(git rev-parse HEAD)
echo Building into $OUT
mkdir $OUT
./bin/generate_kudu_tracing_contents --outdir=$OUT

tar czf $OUT.tar.gz $OUT

echo Created $OUT.tar.gz
echo Uploading to s3 with a command like:
echo   s3cmd put -P $OUT.tar.gz s3://cloudera-thirdparty-libs/$OUT.tar.gz
