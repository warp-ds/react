var a=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(u,r){return u.concat(typeof r=="string"?r:Array.isArray(r)?a.apply(void 0,r):typeof r=="object"&&r?Object.keys(r).map(function(o){return r[o]?o:""}):"")},[]).join(" ")};export{a as r};
