const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// Start Honeybadger integration
const HoneybadgerSourceMapPlugin = require('@honeybadger-io/webpack')
const { execSync } = require('child_process')
const HONEYBADGER_REVISION = process.env.HONEYBADGER_REVISION || execSync('git rev-parse HEAD').toString().trim()

environment.plugins.prepend(
  "Environment",
  new webpack.EnvironmentPlugin(
    JSON.parse(
      JSON.stringify({
        HONEYBADGER_REVISION: HONEYBADGER_REVISION,
        HONEYBADGER_API_KEY: process.env.HONEYBADGER_API_KEY,
      })
    )
  )
)

environment.plugins.prepend(
  'HoneybadgerSourceMap',
  new HoneybadgerSourceMapPlugin({
    apiKey: process.env.HONEYBADGER_API_KEY,
    assetsUrl: process.env.HONEYBADGER_ASSETS_URL,
    silent: false,
    ignoreErrors: false,
    revision: HONEYBADGER_REVISION
  })
)
// End Honeybadger integration

module.exports = environment
