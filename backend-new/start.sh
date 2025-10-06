#!/bin/bash

# Remove public folder and create symlink to persistent disk
rm -rf /opt/render/project/src/backend-new/public
mkdir -p /data/public/uploads
ln -s /data/public /opt/render/project/src/backend-new/public

# Start Strapi
yarn start