const images = [
    "./imgs/peanut.png", //A
    "./imgs/arpe.png", //B
    "./imgs/cara.png", //C
    "./imgs/chia.png", //D
    "./imgs/ciocc.png", //E
    "./imgs/colo.png", //F
    "./imgs/corto.png", //G
    "./imgs/ethi.png", //H
    "./imgs/fred.png", //I
    "./imgs/gen.png", //J
    "./imgs/india.png", //K
    "./imgs/indo.png", //L
    "./imgs/istan.png", //M
    "./imgs/kaha.png", //N
    "./imgs/miami.png", //O
    "./imgs/napo.png", //P
    "./imgs/nica.png", //Q
    "./imgs/noc.png", //R
    "./imgs/colo.png", //S
    "./imgs/pal.png", //T
    "./imgs/paris.png", //U
    "./imgs/peru.png", //V
    "./imgs/ris.png", //W
    "./imgs/roma.png", //X
    "./imgs/stock.png", //Y
    "./imgs/suc.png", //Z
  ];
  
  function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");
  
    // Assign an image based on character (A-Z)
    const index = input.charCodeAt(0) - 65; // 'A' is 65 in ASCII
    if (index >= 0 && index < images.length) {
      imgElement.src = images[index];
      imgElement.style.display = "block";
    } else {
      alert("Please enter a letter between A and Z.");
      imgElement.style.display = "none";
  
      // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
      imgElement.src =
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtkdnJhMXY4Njd1cXR3MTM3MW1nMzZ1NXNhNHlhOHA0MWF2dDUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13dRJkj5wgKq9q/giphy.gif";
      imgElement.style.display = "block";
    }
  }
  
  
