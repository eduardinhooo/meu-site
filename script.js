let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  // Alterando o fundo do cartão para um vídeo com áudio
  card.innerHTML = `
    <video id="myVideo" width="100%" height="100%" autoplay loop muted>
      <source src="https://s17.aconvert.com/convert/p3r68-cdx67/fj4ah-rwyt9.mp4" type="video/mp4">
    </video>
    <audio autoplay loop>
      <source src="seu_audio.mp3" type="audio/mp3">
    </audio>
  `;

  question.style.display = "none";
  message.style.display = "flex";
});

// Movimento aleatório do botão 'não'
document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 50;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});

