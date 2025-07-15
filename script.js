function searchPosts() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const posts = document.getElementsByClassName('blog-post');

  for (let i = 0; i < posts.length; i++) {
    const title = posts[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
    if (title.includes(input)) {
      posts[i].style.display = "";
    } else {
      posts[i].style.display = "none";
    }
  }
}
