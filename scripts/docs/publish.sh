#!/bin/sh

ARG_DEFS=(
)

function init {
  PROJECT_DIR=$SCRIPT_DIR/../..
  IONIC_SITE_DIR=$PROJECT_DIR/tmp/ionic-site
}

function run {
  VERSION=$(readJsonProp "$PROJECT_DIR/package.json" "version")

  echo "-- Cloning ionic-site..."
  rm -rf $IONIC_SITE_DIR
  # For now, use @ajoslin's fork of ionic-site for docs (until they are more complete)
  git clone https://ajoslin:$GH_TOKEN@github.com/ajoslin/ionic-site.git $IONIC_SITE_DIR \
    --depth=10 \
    --branch=gh-pages

  cd $PROJECT_DIR
  gulp docs

  cd $IONIC_SITE_DIR
  git add -A
  git commit -am "chore: update docs to v$VERSION"
  git push -q origin gh-pages

  echo "-- Published ionic-site to v$VERSION successfully!"
}

source $(dirname $0)/../utils.inc
