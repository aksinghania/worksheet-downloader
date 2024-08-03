document.getElementById("removeButton").addEventListener("click", () => {
  const selector = document.getElementById("selector").value.trim();

  if (selector) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: removeElements,
        args: [selector],
      });
    });
  }
});

document.getElementById("marginButton").addEventListener("click", () => {
  const selector = document.getElementById("marginSelector").value.trim();

  if (selector) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: setMarginTopToZero,
        args: [selector],
      });
    });
  }
});

function removeElements(selector) {
  const elementsById = document.querySelectorAll(`#${selector}`);
  const elementsByClass = document.querySelectorAll(`.${selector}`);

  elementsById.forEach((element) => element.remove());
  elementsByClass.forEach((element) => element.remove());
}

function setMarginTopToZero(selector) {
  const elementsByClass = document.querySelectorAll(`.${selector}`);
  elementsByClass.forEach((element) => (element.style.marginTop = `-50px`));
  elementsByClass.forEach((element) => (element.style.marginBottom = `-50px`));
}
