document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("searchInput"),t=document.getElementById("searchButton");t.addEventListener("click",(function(){const t=e.value;t&&chrome.tabs.create({url:"https://www.google.com/search?q="+encodeURIComponent(t)})})),e.addEventListener("keypress",(function(e){"Enter"===e.key&&t.click()}))}));