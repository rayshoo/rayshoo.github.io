ourRequest = new XMLHttpRequest();
ourRequest.open('GET','/assets/json/bookmark.json');
ourRequest.send();
ourRequest.onload = function(){ 
  items = JSON.parse(ourRequest.responseText);
  const bookmark = document.querySelector('#bookmark');
  let html = '';
  
  if (items.length < 6){
    for(item of items){
      html += `
      <article>
      <h3>${item.title}</h3>
      <a href="${item.image_url}" target="_blank" class="image"><span class="bookmark-image" style="background-image:url('${item.image}');"><span/></a>
      <p>${item.content}</p>
      <ul class="actions">
      <li><a href="${item.url}" class="button">More</a></li>
      </ul>
      </article>`
    }
    bookmark.innerHTML = html;
  }
  else {
    const post_items = new Array();
    for(let i = 0; i < 6; ++i) {
      let random = getRandomInt(0, items.length);

      while(post_items.length !== 6) {
        post_items.includes(random) ? 
        (()=>{
          random = getRandomInt(0, items.length);
        })()
        : 
        (()=>{
          post_items.push(random);
        })()
      }
    }
    for(item of post_items){
      html += `
      <article>
      <a href="${items[item].image_url}" target="_blank" class="image"><span class="bookmark-image" style="background-image:url('${items[item].image}');"><span/></a>
      <h3>${items[item].title}</h3>
      <p>${items[item].content}</p>
      <ul class="actions">
      <li><a href="${items[item].url}" class="button">More</a></li>
      </ul>
      </article>`
    }
    bookmark.innerHTML = html;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}