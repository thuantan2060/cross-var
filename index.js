#!/usr/bin/env node

require( "@babel/register" )( {
    ignore: [],
    only: [/src/],
} );
require( "./src/index.js" );