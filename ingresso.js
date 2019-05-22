const domain = 'https://api-content.ingresso.com';
const routers = {
  partnership: 'v0/events/partnership/laboratoria',
}
const myInit = {
  // "mode": 'no-cors',
  "pragma": "no-cache",
  "date": "Tue, 21 May 2019 21:37:02 GMT",
  "content-encoding": "gzip",
  "x-frame-options": "SAMEORIGIN",
  "vary": "Accept-Encoding",
  "strict-transport-security": "max-age=31536000",
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-cache",
  "connection": "keep-alive",
  "content-length": "2713624",
  "expires": "Tue, 21 May 2019 21:37:02 GMT"
}

fetch(`${domain}/${routers.partnership}` ,myInit)
.then ( response => response.json())
.then( res => console.log(res))

// const myImg = document.createElement('ul');
// var objectURL= URL.createObjectURL(response);
// myImg.src = objectURL