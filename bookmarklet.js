function uuid() {
  return "5d709292-d5a2-4067-940e-0130b5e8dd56";
}
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
  // Make a new element that will store the formatted text.
  let element = document.createElement("input");
  element.value = formattedText;
  element.select()
  element.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  // Clean up the element.
  element.remove();
  prompt("Press CTRL+C or CMD+C, then escape and paste into Roam.", formattedText);
}
getText();
