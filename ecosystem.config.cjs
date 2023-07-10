module.exports = {
  apps : [{
    name: 'astro-hackernews',
    script: './dist/server/entry.mjs',
    env: {
      NODE_ENV: 'production',
      PORT: 3210
    }
  }]
};
