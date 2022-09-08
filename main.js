fetch('http://127.0.0.1:3000')
.then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

    fetch('http://127.0.0.1:3000')
  .catch(function(error) {
    console.log('Request failed', error)
  });
  

 