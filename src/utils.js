function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

function toggleContent(e){
  //Rotate the claret icon on click
  e.currentTarget.lastElementChild.classList.toggle('rotate-180')
  // Hide or show the content of the category 
  e.currentTarget.nextElementSibling.classList.toggle('h-0');
}

export {toTitleCase, toggleContent}