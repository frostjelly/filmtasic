console.log("JavaScript is working!");

let baseApiUrl = "https://jsonplaceholder.typicode.com/";

const getUserList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return data;
};

let userId = null;

const displayUserPosts = userId => {
  localStorage.setItem('userId', userId)
  window.location.href = `${window.location.origin}/user.html`
};

const renderUserListArr = async () => {
  const userListArr = await getUserList();
  const userListHtml = await userListArr
    .map(user => {
      userId = user.id;
      return `
      <div class="user__container" onclick="displayUserPosts(${userId})">
        <h2 class="user__name">${user.name}</h2>
        <p><span class="font__bold">Email</span>: ${user.email}</p>
        <p><span class="font__bold">Phone</span>: ${user.phone}</p>
        <p><span class="font__bold">Website</span>: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      </div>
    `;
    })
    .join("");
  document.querySelector(".user-list__container").innerHTML = userListHtml;
};

renderUserListArr();

