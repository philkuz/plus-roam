function getText() {
  let text = "";
  if (window.getSelection() != "") {
    text = window.getSelection().toString();
  }
  const formattedText =
    "__" +
    text +
    "__ — via [" +
    document.title +
    "](" +
    location.href +
    ") [[+Roam]]";

  // Unselect whatever is currently selecteds.
  const docSel = document.getSelection();
  docSel.removeAllRanges();

  // Make a new element that will store the formatted text.
  let element = document.createElement("input");
  element.id = "blah";
  element.value = formattedText;
  document.body.appendChild(element);
  element.select()
  element.setSelectionRange(0, 99999); // For mobile devices
  console.log("yo")
  document.execCommand("copy");
  docSel.removeAllRanges();
  // Clean up the element.
  document.body.removeChild(element);
  let toaster = document.createElement("div");
  toaster.innerHTML = `Copied!`;
  toaster.style.position = "fixed";
  toaster.style.display = "block";
  toaster.style.right = "10px";
  toaster.style.top = "10px";
  toaster.style.backgroundColor = "red";
  toaster.style.color = "#FFFFFF";
  toaster.style.padding = "5px";
  toaster.style.borderRadius = "5px";
  toaster.style.zIndex = "99999";
  document.body.appendChild(toaster);

  setTimeout(function() {
    toaster.style.opacity = 0;
    toaster.style.transition = "opacity 2s";
  }, 2000);

  setTimeout(function() {
    document.body.removeChild(toaster);
  }, 4000);
}
getText();
