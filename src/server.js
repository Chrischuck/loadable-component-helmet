/* eslint-disable */

import path from 'path'
import React from 'react';
import express from 'express';
import compression from 'compression';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'

import App from './app';

const minify = require('html-minifier').minify;

const server = express();
server.use(compression({ level: 9 }))

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {

    const extractor = new ChunkExtractor({
      statsFile: path.resolve('build/loadable-stats.json'),
      entrypoints: ['client'],
    })
   
    const markup = renderToString(
      <ChunkExtractorManager extractor={extractor}>
        <ServerLocation url={req.url}>
          <App />
        </ServerLocation>
      </ChunkExtractorManager>,
    )
   
    res.send(minify(
      `<!doctype html>
          <html lang="">
          <head>
              ${extractor.getLinkTags()}
              ${extractor.getStyleTags()}
          </head>
          <body style='margin:0'>
              <div id="root">${markup}</div>
              ${extractor.getScriptTags()}
          </body>
      </html>`,
    {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      collapseInlineTagWhitespace: true,
      decodeEntities: true,
    }));
  });

export default server;
