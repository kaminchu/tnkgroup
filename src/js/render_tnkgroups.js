import htmlparser from "htmlparser";

const handler = new htmlparser.DefaultHandler((error, dom) => {
  if (error) {
    console.error(error);
  } else {
    const div = document.getElementById("tinkogroups");
    dom
    .filter(e => e.name === "a")
    .forEach(e => {
      const href = e.attribs.href;
      const label = e.children[0].data;
      div.appendChild(renderMember(label, href));
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

import logo from "../img/logo.png";
const renderMember = (label, href) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const aImg = document.createElement("a");
  const aLbl = document.createElement("a");
  img.src = logo;
  img.className = "thumb";
  aImg.href = href;
  aImg.alt = label;
  aImg.target = "_blank";
  aImg.className = "image-link";
  aImg.appendChild(img);
  aLbl.href = href;
  aLbl.innerText = label;
  aLbl.target = "_blank";
  div.appendChild(aImg);
  div.appendChild(aLbl);
  return div;
};
