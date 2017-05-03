{
  "apps": [

    {
      "name": "feeder.lol-item-sets-generator.org-app",
      "script": "dist/app.js",
      "env_development": {
        "NODE_ENV": "development",
        "HOST": "http://domain.tld",
        "PORT": 9000,
        "KEY_RIOT": "API_KEY"
      },
      "env_production": {
        "NODE_ENV": "production",
        "HOST": "http://domain.tld",
        "PORT": 9000,
        "KEY_RIOT": "API_KEY"
      },
      "args": ["--release"],
      "watch": false,
      "append_env_to_name": true,
    },
    {
      "name": "feeder.lol-item-sets-generator.org-worker",
      "script": "dist/worker.js",
      "env_development": {
        "NODE_ENV": "development",
        "CRON_GENERATOR": "0 */2 * * *", // Every 2 hours
        "MONGO_URI": "mongodb://localhost:27017/lol-item-sets-generator-org",
        "KEY_CHAMPIONGG": "API_KEY",
        "KEY_RIOT": "API_KEY"
      },
      "env_production": {
        "NODE_ENV": "production",
        "CRON_GENERATOR": "0 */2 * * *", // Every 2 hours
        "MONGO_URI": "mongodb://localhost:27017/lol-item-sets-generator-org",
        "KEY_CHAMPIONGG": "API_KEY",
        "KEY_RIOT": "API_KEY"
      },
      "args": ["--release"],
      "watch": false,
      "append_env_to_name": true,
    }

  ]

}