# Middleware

As the name suggests, middleware is the code that runs in the middle—usually between a framework receiving a request and producing a response. In Redux, middleware runs between the moment when an action is dispatched and the moment when that action is passed along to the reducer.

Middleware intercepts actions after they are dispatched and before they are passed along to the reducer. Some common tasks that middleware perform include logging, caching, adding auth tokens to request headers, crash reporting, routing, and making asynchronous requests for data.

