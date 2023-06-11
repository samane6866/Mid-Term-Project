console.log("HELLO");
const web = "https://jsonplaceholder.typicode.com/posts?_limit=3";

function linkProject() {
  fetch(web)
    .then((element) => element.json())

    .then((element2) => {
      let infoProject = "";
      element2.forEach((post) => {
        infoProject += `
              
           
            


            <div class="project-card">
            <div class="project-img">
              <img
                width="340px"
                src="./projects-section-20220919T111218Z-001/projects-section/${
                  post.id
                }.jpg"
                alt="colorfull card ${post.id}"
              />
            </div>
            <div class="p-content">
              <div class="project-text">
                <h3>${post.title.slice(0, 10)}</h3>
                <div class="p-discription">${post.body.slice(0, 40)}</div>
                <a class="p-link" href="project.html" target="_blank"
                  >Learn More</a
                >
              </div>
            </div>
          </div>
              
              `;
      });
      console.log(infoProject);
      document.querySelector(".project-grid").innerHTML = infoProject;
    })
    .catch((error) => {
      console.log(error);
    });
}
linkProject();
