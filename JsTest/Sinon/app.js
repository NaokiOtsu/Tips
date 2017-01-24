function loadServerHTML(container, url) {
  let xhr = new XMLHttpRequest();
  
  xhr.addEventListener('loadstart', function() {
    container.innerHTML = 'loading';
  });
  
  xhr.addEventListener('load', function(event) {
    container.innerHTML = event.target.responseText;
  });
  
  xhr.open('GET', url);
  xhr.send();
}

export { loadServerHTML };