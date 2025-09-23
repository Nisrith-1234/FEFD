
function setTheme(theme) {
  document.body.className = theme;  
  localStorage.setItem("theme", theme); 
}


window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
};
