module.exports = {
  apps: [
    {
      name: 'server_runtime',
      script: 'dist/main.js', // Adjust the path to your main.js file or the entry point of your NestJS app
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};


