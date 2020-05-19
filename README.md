# Honeybadger on React on Rails

> [Honeybadger](https://www.honeybadger.io) is a badass error monitoring service for full stack web apps. :zap:

> [React on Rails](https://github.com/shakacode/react_on_rails) integrates Rails with (server rendering of) Facebook's React front-end framework.

**Honeybadger on React on Rails** provides a simple example of how to integrate
Honeybadger with React on Rails to unlock Universal (Isomorphic) error
reporting in your React-based Rails apps.

## Quick Start

The easiest way to get started with this application is to deploy it to Heroku
with the Heroku Button:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Using that button will spin up a Heroku app for you with the Honeybadger
add-on already added to the app.

## Slightly Less Quick Start

Actually, still pretty quick:

1. Create a free basic account at https://www.honeybadger.io/plans/

2. Select "React" when creating your first project

3. Copy your API key and then do this:

    ```sh
    export HONEYBADGER_API_KEY="your API key"
    git clone https://github.com/honeybadger-io/examples-react-on-rails.git
    cd examples-react-on-rails
    bundle install
    yarn install
    ./bin/foreman start -f Procfile.dev
    ```
    _Tip: [direnv](https://direnv.net/) is a nice way to manager your local ENV configuration._

4. Visit: http://localhost:3000/

## Let's throw some errors

Once you launch the app, follow the instructions on the homepage to send test errors to your [Honeybadger project](https://app.honeybadger.io/projects).

## Project Structure

Here's an overview of the project structure:

```sh
# The router controller and view pass server requests to the client app (see config/routes.rb).
app
├── controllers
│   └── router_controller.rb
└── views
    ├── layouts
    │   └── application.html.erb
    └── router
        └── index.html.erb

# The React app
client
└── app
    ├── App.jsx
    ├── BrowserRouterApp.jsx
    ├── ServerRouterApp.jsx
    └── packs
        ├── application.css
        └── registration.js

# Rails & Webpacker Configuration
config
├── initializers
│   └── react_on_rails.rb
├── routes.rb
├── webpack
│ └── environment.js
└── webpacker.yml
```

## Configuration Overview

### React on Rails

Follow the [Basic Installation guide](https://github.com/shakacode/react_on_rails#basic-installation) to get up and running with React on Rails.

This application is configured with [react-router-dom](https://github.com/ReactTraining/react-router). See [`routes.rb`](./config/routes.rb) and [`index.html.erb`](./app/views/router/index.html.erb) for how to configure Rails to pass through all routes to [the React router app](./client/app/App.jsx).

[The React application](./client/app/) is configured in [`react_on_rails.rb`](./config/initializers/react_on_rails.rb) and [`webpacker.yml`](./config/webpacker.yml).

### Honeybadger JavaScript

[Honeybadger's React integration](https://docs.honeybadger.io/lib/javascript/integration/react.html) is used to report errors in browser runtimes. See the config in [`BrowserRouterApp.jsx`](./client/app/BrowserRouterApp.jsx).

#### Reporting server-rendering errors in Node.js

Because [honeybadger-js](https://github.com/honeybadger-io/honeybadger-js) currently has a dependency on `window`, it cannot be used in Node.js runtimes. Until we release a universal build (we're planning on it,) our [separate Node.js package](https://docs.honeybadger.io/lib/node.html) can be used to report server-rendering errors from Node.

In this example, the [Honeybadger Gem](#honeybadger-gem) reports errors from React on Rails during server rendering.

### Honeybadger Webpack Plugin

Webpacker has been configured with [@honeybadger-io/webpack](https://github.com/honeybadger-io/honeybadger-webpack) to automatically upload JavaScript source maps to Honeybadger.io. See [`environment.js`](./config/webpack/environment.js) for webpack config.

See [the Honeybadger docs](https://docs.honeybadger.io/lib/javascript/integration/react.html#source-map-support) for more info.

### Honeybadger Gem

React on Rails raises a Ruby exception when a JavaScript error occurs during server-rendering. All exceptions are then reported to Honeybadger.io by [the honeybadger Ruby gem](https://github.com/honeybadger-io/honeybadger-ruby/).

See Honeybadger's [Rails Exception Tracking Guide](https://docs.honeybadger.io/lib/ruby/integration-guides/rails-exception-tracking.html) for more info on general exception tracking in Rails.

## Contributing

**Contributions are welcome and appreciated.** If you come up with an improvement over the configuration in this example, please [create an issue](https://github.com/honeybadger-io/examples-react-on-rails/issues/new) (or [email us](mailto:support@honeybadger.io)) and tell us about it!

## License

This project is MIT licensed. See the [LICENSE](https://raw.github.com/honeybadger-io/examples-react-on-rails/master/LICENSE) file in this repository for details.