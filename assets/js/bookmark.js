ourRequest = new XMLHttpRequest();
ourRequest.open('GET','/assets/json/bookmark.json');
ourRequest.send();
ourRequest.onload = function(){ 
  items = JSON.parse(ourRequest.responseText);
  const bookmark = document.querySelector('#bookmark');
  let html = '';
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