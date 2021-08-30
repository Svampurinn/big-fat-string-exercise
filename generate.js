const btn = document.querySelector("button");
const value = document.querySelector("select");
const input = document.querySelector("input");
const outP = document.querySelector("#output");
btn.addEventListener("click", function () {
  let finput = input.value;
  let fvalue = value.options[value.selectedIndex].value;
  switch (value.options[value.selectedIndex].value) {
    case "1":
      if (finput.indexOf(" ") === -1) {
        finput =
          finput.substring(0, 1).toUpperCase() +
          finput.substring(1).toLowerCase();
      }
      break;
    case "2":
      if (finput.indexOf(" ") != -1) {
        finput = finput.substring(0, finput.indexOf(" ")).trim();
      }
      break;
    case "3":
      if (finput.indexOf(" ") != -1) {
        finput = finput.substring(0, finput.indexOf(" ")).trim().length;
      }
      break;
    case "4":
      if (finput.indexOf(" ") != -1) {
        finput =
          finput.indexOf(" ") +
          2 +
          " " +
          finput.substring(finput.indexOf(" "), finput.lastIndexOf(" ")) +
          " " +
          finput.lastIndexOf(" ");
      }
      break;
    case "5":
      if (finput.indexOf(".") != -1) {
        finput = finput.substring(finput.lastIndexOf("."));
        if (finput != ".png" && finput != ".jpg") {
          finput = "neither";
        }
      }
      break;
    case "6":
      finput = "*".repeat(finput.length);

      break;
    case "7":
      finput =
        finput.substring(0, 2) +
        finput.substring(2, 3).toUpperCase() +
        finput.substring(3);
      break;
    case "8":
      finput = finput.split(" ");
      for (let i = 0; i < finput.length; i++) {
        finput[i] =
          finput[i].substring(0, 1).toUpperCase() + finput[i].substring(1);
      }
      finput = finput.join(" ");
      finput = finput.split("-");
      for (let i = 0; i < finput.length; i++) {
        finput[i] =
          finput[i].substring(0, 1).toUpperCase() + finput[i].substring(1);
      }
      finput = finput.join("-");
  }
  outP.value = finput;
});
