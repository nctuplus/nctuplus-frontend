#!/bin/bash

NON_ROOT_USER='nctuplus'
DOCKER_COMPOSE_FILE_PRODUCTION='docker-compose.production.yml'
DOCKER_COMPOSE_FILE_STAGING='docker-compose.staging.yml'
DKC='docker-compose'
DOCKER_COMPOSE_FILE_CHOOSED=''
STAGING_CONTAINER='staging-plus-nctu-frontend'
PRODUCTION_CONTAINER='plus-nctu-frontend'
CONTAINER_USED=''

# Function for print instructional message
function print() {
  echo -e "\n"
  echo -e -n "\e[1;32mUse the following command to attach inside the container \e[0m"
  echo -e "\e[1;31mAS ROOT.\e[0m"
  echo -e "\e[1;36m${DKC} -f ${DOCKER_COMPOSE_FILE_CHOOSED} exec ${CONTAINER_USED} bash \e[0m"

  echo "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"

  echo -e -n "\e[1;32mUse the following command to attach inside the container \e[0m"
  echo -e "\e[1;31mAS NON-ROOT USER.\e[0m"
  echo -e "\e[1;36m${DKC} -f ${DOCKER_COMPOSE_FILE_CHOOSED} exec -u ${NON_ROOT_USER} ${CONTAINER_USED} bash \e[0m"

  echo "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
}

# Choices list for choosing
echo "Choose an environment setting: "
echo "- - - - - - - - - -"
echo "1) production"
echo "2) staging"
echo "0) exit"
echo "- - - - - - - - - -"

# Read the input
read -p "Select a number [0-2] and then [Enter]: " option
case $option in
  1)
    echo -e "\nEnvironment: Production"
    echo "Docker image and container for prodution mode will be created and started"
    DOCKER_COMPOSE_FILE_CHOOSED="${DOCKER_COMPOSE_FILE_PRODUCTION}"
    CONTAINER_USED="${PRODUCTION_CONTAINER}"
    ;;
  2)
    echo "Environment: Staging"
    echo "Docker image and container for Staging mode will be created and started"
    DOCKER_COMPOSE_FILE_CHOOSED="${DOCKER_COMPOSE_FILE_STAGING}"
    CONTAINER_USED="${STAGING_CONTAINER}"
    ;;
  0)
    echo "Exit."
    exit 0
    ;;
  *)
    echo 'Unrecognized option'
    exit 1
    ;;
esac

# Build the image and run the container
$DKC -f $DOCKER_COMPOSE_FILE_CHOOSED build
read -p "Do you want the container running in background? [Y/n]: " bg_option
if [ $bg_option == "Y" ] || [ $bg_option == "y" ]; then
  $DKC -f $DOCKER_COMPOSE_FILE_CHOOSED up -d
  print
else
  print
  echo -e "\e[1;31mCTRL-C to stop the container.\e[0m"
  sleep 45s
  $DKC -f $DOCKER_COMPOSE_FILE_CHOOSED up
fi
