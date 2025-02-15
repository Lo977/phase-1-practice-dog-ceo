console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/2")
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((imgLink) => {
        let img = document.createElement("img");
        img.src = imgLink;
        document.getElementById("dog-image-container").appendChild(img);
      });
    });
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      let breeds = data.message;
      let breedList = document.getElementById("dog-breeds");
      for (let breed in breeds) {
        let li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
        li.addEventListener("click", () => {
          li.style.color = "red";
        });
      }
      document
        .getElementById("breed-dropdown")
        .addEventListener("change", (e) => {
          breedList.textContent = "";
          for (let dogs in breeds) {
            if (dogs[0] === e.target.value) {
              let li = document.createElement("li");
              li.textContent = dogs;
              breedList.appendChild(li);
              li.addEventListener("click", () => {
                li.style.color = "red";
              });
            }
          }
        });
    });
});
