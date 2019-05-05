const http = new easyHttp();

http.get('https://my-json-server.typicode.com/typicode/demo/posts', function (error, posts) {

  if (error) {
    console.log(error)
  } else {
    console.log(posts);
  }

});

const data = {
  title: 'New post'
}

const data1 = {
  title: 'Updated New post'
}


http.post('https://my-json-server.typicode.com/typicode/demo/posts', data, function (error, post) {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});

http.put('https://my-json-server.typicode.com/typicode/demo/posts/1', data1, function (error, post) {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});

http.delete('https://my-json-server.typicode.com/typicode/demo/posts/1', function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
