source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.2"

# The following gems are from `rails new`:
gem "rails", "~> 6.0.3"
gem "puma", "~> 5.0"
gem "webpacker", "~> 5.2"
gem "bootsnap", ">= 1.4.2", require: false

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", "~> 3.2"
  gem "foreman", "~> 0.87"
end

group :test do
  gem "capybara", ">= 2.15"
  gem "selenium-webdriver"
  gem "webdrivers"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Added by `rails generate react_on_rails:install`
gem "react_on_rails", "12.0.3"
gem "mini_racer", platforms: :ruby

# This was necessary to fix a missing constant `ExecJS` error when server-rendering
gem "execjs", "~> 2.7"

# Consistent style
# https://github.com/testdouble/standard
gem "standard", "~> 0.7"

# Report Rails exceptions
# https://docs.honeybadger.io/lib/ruby/integration-guides/rails-exception-tracking.html
gem "honeybadger", "~> 4.7"
