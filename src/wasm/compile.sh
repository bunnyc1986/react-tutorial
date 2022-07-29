#!/bin/bash

OUTPUT="webpwasm.js"

emcc -O3 -s WASM=1 \
    -o $OUTPUT \
    -I libwebp \
    -s EXPORT_ES6=1 \
    -s MODULARIZE=1 \
    -s 'ENVIRONMENT="web"' \
    -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    --bind \
    --post-js post.js \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \
    libwebp/sharpyuv/*.c

# add /* eslint-disable */ to the begining of the output js file
echo "/* eslint-disable */" | cat - $OUTPUT > temp && mv temp $OUTPUT