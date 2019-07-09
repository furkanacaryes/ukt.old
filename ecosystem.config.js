module.exports = {
  apps : [{
    name: 'acar.digital.ukt',
    script: 'dist/server',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
  }]
};
