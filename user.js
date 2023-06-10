console.log("user.js is working!");

const userId = localStorage.getItem("userId");
console.log("User ID = ", userId);

let userIdChange = null;

const renderUserPostListArr = async id => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const data = await res.json();
  const userPostListHtml = await data
    .map(post => {
      return `
      <div class="user-post__container">
      <div class="post__id--wrapper">
        <p class="post__user-id">User ID: ${post.userId}</p>
        <p class="post__post-id">Post ID: ${post.id}</p>
      </div>
        <h2 class="post__title">Title: ${post.title.toUpperCase()}</h2>
        <h3 class="post__body">Message: ${post.body}</h3>
      </div>
    `;
    })
    .join("");
  document.querySelector(".user-posts__container").innerHTML = userPostListHtml;
};

renderUserPostListArr(userId);


const onSearchChange = usersId => {
  // console.log(usersId.target.value);
  userIdChange = usersId.target.value;
  console.log(userIdChange, userId);
  renderUserPostListArr(userIdChange);
};

