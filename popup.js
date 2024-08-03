document.getElementById("modifyButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: modifyPage,
    });
  });
});

function modifyPage() {
  // Classes to remove
  const classesToRemove = [
    "question-actions",
    "css-4yer0f",
    "css-okp1i3",
    "MuiAppBar-positionFixed",
    "css-1vz94wv",
    "css-4ejgit",
    "css-1pk3wz",
    "css-vubbuv",
    "css-7d979a",
    "MuiFab-circular",
    "css-g1i8p9",
    "css-1s7zn6p",
  ];
  classesToRemove.forEach((className) => {
    document
      .querySelectorAll(`.${className}`)
      .forEach((element) => element.remove());
  });

  // Properties to modify
  const propertiesToModify = [
    { className: "css-1vnzknk", property: "marginTop", value: "0px" },
    { className: "css-923ro0", property: "padding", value: "0px" },
    { className: "css-k2lcna", property: "marginBottom", value: "0px" },
    { className: "css-k2lcna", property: "marginTop", value: "-50px" },
  ];

  propertiesToModify.forEach(({ className, property, value }) => {
    document.querySelectorAll(`.${className}`).forEach((element) => {
      element.style[property] = value;
    });
  });
}
