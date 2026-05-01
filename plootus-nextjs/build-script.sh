#!/bin/bash
cd "$(dirname "$0")"

echo "Building Next.js app..."
npm run sitemap
npm run build

if [ -d "out" ]; then
    echo "Copying build output to Plootus-Nextjs-website..."
    cp -r out/* ../Plootus-Nextjs-website/
    
    echo "Cleaning up..."
    rm -r out/
    
    cd ../Plootus-Nextjs-website
    
    echo "Committing and pushing changes..."
    git add .
    git commit -m "$1"
    git push --set-upstream origin main
    
    echo "Deployment triggered successfully."
else
    echo "Error: 'out' directory not found. Build may have failed."
    exit 1
fi
