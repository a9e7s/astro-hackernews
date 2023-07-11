import { defineMiddleware } from 'astro/middleware';

// export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
//   // intercept response data from a request
//   // optionally, transform the response by modifying `locals`
//   // locals.welcomeTitle = () => 'New title';
//   // return a Response or the result of calling `next()`
//   const response = await next();
//   const html = await response.text();
//   return new Response(html, { status: 200, headers: response.headers });
// });

export const onRequest = defineMiddleware(({ locals, request }, next) => {
  // intercept response data from a request
  // optionally, transform the response by modifying `locals`
  locals.welcomeTitle = () => 'New title';
  // return a Response or the result of calling `next()`
  next();
});
