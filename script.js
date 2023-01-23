//your code here
const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

textbox.addEventListener("input", () => {
  const text = textbox.value;
  let count = 0;
  if(text.length>0){
    count = text.split(" ").length;
  }
  wordCount.textContent = count;
});
