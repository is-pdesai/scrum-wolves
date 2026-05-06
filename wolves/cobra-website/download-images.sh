#!/bin/bash
# ============================================================
# Cobra World — Image Downloader
# Run this once to download all gallery images locally.
# Usage: bash download-images.sh
# ============================================================

mkdir -p images

echo "Downloading cobra images..."

curl -L -o images/indian-cobra.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Indian_cobra.jpg/600px-Indian_cobra.jpg"
echo "  ✓ Indian Cobra"

curl -L -o images/king-cobra.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ophiophagus_hannah_2009.jpg/600px-Ophiophagus_hannah_2009.jpg"
echo "  ✓ King Cobra"

curl -L -o images/egyptian-cobra.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Egyptiancobra.jpg/600px-Egyptiancobra.jpg"
echo "  ✓ Egyptian Cobra"

curl -L -o images/monocled-cobra.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/NajaKaouthia.jpg/600px-NajaKaouthia.jpg"
echo "  ✓ Monocled Cobra"

curl -L -o images/cobra-closeup.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Naja_naja_in_Kerala_closeup.jpg/600px-Naja_naja_in_Kerala_closeup.jpg"
echo "  ✓ Cobra Close-Up"

curl -L -o images/spitting-cobra.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Naja_siamensis_2.jpg/600px-Naja_siamensis_2.jpg"
echo "  ✓ Spitting Cobra"

echo ""
echo "Done! All images saved to the images/ folder."
echo "Open index.html in your browser to see the gallery."
