document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((imgLink) => {
        const img = document.createElement("img");
        img.src = imgLink;
        document.getElementById("dog-image-container").appendChild(img);
      });
    });

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      const breedList = document.getElementById("dog-breeds");
      const breeds = data.message;
      for (let breed in breeds) {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
        console.log(breedList);
        li.addEventListener("click", () => {
          li.style.color = "red";
        });
      }

      document
        .getElementById("breed-dropdown")
        .addEventListener("change", (e) => {
          breedList.textContent = "";
          for (let breed in breeds) {
            if (breed[0] === e.target.value) {
              const li = document.createElement("li");
              li.textContent = breed;
              breedList.appendChild(li);
              li.addEventListener("click", () => {
                li.style.color = "red";
              });
            }
          }
        });
    });
});
