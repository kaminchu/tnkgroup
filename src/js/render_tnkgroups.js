import htmlparser from "htmlparser";

const handler = new htmlparser.DefaultHandler((error, dom) => {
  if (error) {
    console.error(error);
  } else {
    const ui = document.getElementById("tinkogroups");
    const members = dom
    .filter(e => e.name === "a")
    .forEach(e => {
      const href = e.attribs.href;
      const label = e.children[0].data;
      const li = document.createElement("li");
      li.innerHTML = `<a href="${href}" target=”_blank”>${label}</a>`;
      ui.appendChild(li);
    });
  }
});


fetch("https://cuderia1917.github.io/tnkgroup/")
.then(function(response) {
  return response.text();
}).then(function(text) {
  const parser = new htmlparser.Parser(handler);
  parser.parseComplete(text);
});






