#!/bin/sh
PRODUCTION_USER_ID=${LOCAL_USER_ID:-2266}
PRODUCTION_GROUP_ID=$PRODUCTION_USER_ID
PRODUCTION_USER_NAME=nctuplus
PRODUCTION_USER_HONE="/home/$PRODUCTION_USER_NAME"
FRONTEND_APP_DIRECTORY="$PRODUCTION_USER_HONE/frontend"

# Add user who owns frontend react app dorectpry when container boots up
if id $PRODUCTION_USER_NAME >/dev/null 2>&1; then
  chown -R $PRODUCTION_USER_ID:$PRODUCTION_GROUP_ID $PRODUCTION_USER_HONE
else
  useradd -s /bin/bash \
    -u $PRODUCTION_USER_ID \
    $PRODUCTION_USER_NAME
  chown -R $PRODUCTION_USER_ID:$PRODUCTION_GROUP_ID $PRODUCTION_USER_HONE
fi

# Install dependencies and build the react app
cd $FRONTEND_APP_DIRECTORY
su -s /bin/bash -c "yarn install && yarn build" $PRODUCTION_USER_NAME

# Link the builded static files to www folder
mkdir -p /var/www/html
chown -R nginx:nginx /var/www/html
ln -s -f "$FRONTEND_APP_DIRECTORY/build" /var/www/html/frontend

# Start nginx
nginx
