const query = new URLSearchParams(lociation.search);
const color = query.get("color");

document.body.style.backgroundColor = color;
