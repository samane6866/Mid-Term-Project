document.querySelector(".form-info").addEventListener("submit", addPost);
const url = "https://jsonplaceholder.typicode.com/comments";
function addPost(preventForm) {
  preventForm.preventDefault();

  let name = document.querySelector("#user-name");
  let email = document.querySelector("#user-email");
  let phone = document.querySelector("#user-phone");
  let message = document.querySelector("#field");

  // fetch().then().then().catch()

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json,text/plain",
    },
    body: JSON.stringify({
      name: name.value,

      email: email.value,
      phone: phone.value,
      body: message.value,
    }),
  })
    .then((response) => response.json())
    .then((formolario) => console.log(formolario))
    .then(() => {
      let message = "";
      message += `
        
        <div class=" email-done">
        Thank you!Your submission has been received!</div>

        `;
      document.querySelector(".email-done").innerHTML = message;
      name.value = "";
      email.value = "";
    })

    .catch(() => {
      let = message = "";
      message += `
            <div class="email-fail">Ooops!something went wrong..</div>
      </div>
            
            `;
      document.querySelector(".email-fail").innerHTML = message;
    });
}
