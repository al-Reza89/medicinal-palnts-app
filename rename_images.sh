#!/bin/bash

# Navigate to the directory containing the image files
cd ~/Documents/projects/medicinal-plants-app/assets/trees

# Check if there are JPG files to rename
if ls *.JPG 1> /dev/null 2>&1; then
    # Rename all image file extensions to lowercase
    for file in *.JPG; do
        # Extract the filename without extension
        filename="${file%.*}"
        # Check if a file with lowercase extension exists
        if [[ ! -e "${filename}.jpg" ]]; then
            # Rename the file to lowercase extension
            mv "$file" "${filename}.jpg"
        else
            echo "Skipping $file, a file with lowercase extension already exists."
        fi
    done
else
    echo "No JPG files found in the directory."
fi
