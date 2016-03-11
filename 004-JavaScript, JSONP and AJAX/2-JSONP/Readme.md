# JSONP

- Some times you can access the data from another server.
- Cross-domain JSON retrieval via JSONP
- JSON objects should be considered as generic strings, not JavaScript objects.

#### Introduction to JSONP

In this page We will discuss JSONP, i.e. JSON with padding. JSONP is used to request data from a server residing in a different domain. But why do we need a special technique to access data from a different domain? It's because of the Same Origin Policy.

##### Same Origin Policy

In general, this policy states that, if protocol (like http), Port number (like 80) and host (like example.com) is different from where data is being requested, it should not be permitted.But HTML script element is allowed to perform content retrieval from foreign origins.

- Good Explanation is [JSONP](https://javascriptweblog.wordpress.com/2010/11/29/json-and-jsonp/)

##### [Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
#####[JSONP OTHER EXAMPLE ](http://json-jsonp-tutorial.craic.com/index.html)

