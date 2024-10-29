#!/bin/bash

# Capture any flags passed to the script (e.g., -v)
FLAGS="$@"

# Step 1: Bring down Docker Compose services with flags
echo "Bringing down Docker Compose services with flags: $FLAGS"
docker-compose down $FLAGS

# Define the directories you want to fix permissions for
DB_INIT_DIR="./db-init"
CSV_FILES_DIR="./csv-files"

# Define the user and group to set (default to current user and group)
USER="${USER:-$(whoami)}"
GROUP="${USER}"

# Set ownership and permissions for db-init directory
echo "Setting ownership and permissions for $DB_INIT_DIR"
sudo chown -R "$USER:$GROUP" "$DB_INIT_DIR"
sudo chmod -R 775 "$DB_INIT_DIR"

# Set ownership and permissions for csv-files directory
echo "Setting ownership and permissions for $CSV_FILES_DIR"
sudo chown -R "$USER:$GROUP" "$CSV_FILES_DIR"
sudo chmod -R 775 "$CSV_FILES_DIR"

echo "Permissions and ownership fixed for development bind mounts."