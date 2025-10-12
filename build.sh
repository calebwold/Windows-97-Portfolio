#!/bin/bash

# Build script for Netlify deployment
# This script replaces the placeholder API key with the actual key from environment variables

echo "Building site with API key injection..."

# Replace the placeholder with the actual API key
if [ -n "$OPENAI_API_KEY" ]; then
    echo "Injecting API key..."
    sed -i "s/YOUR_OPENAI_API_KEY_HERE/$OPENAI_API_KEY/g" index.html
    echo "API key injected successfully"
else
    echo "Warning: OPENAI_API_KEY environment variable not set"
fi

echo "Build complete!"

