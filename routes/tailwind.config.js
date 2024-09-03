module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Prompt"', '"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}

function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}