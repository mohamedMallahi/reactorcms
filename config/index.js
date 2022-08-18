const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'https://nextjs-hjeswq--3000.local.webcontainer.io/'
  : 'https://your_deployment.server.com';
