function handleFileDrop(e) {
  e.preventDefault();
  e.stopPropagation();

};

function handleDragEnter(e) {
  e.preventDefault();
  e.stopPropagation();

  this.classList.add('dotted');
};

function handleDragLeave(e) {
  e.preventDefault();
  e.stopPropagation();

  this.classList.remove('dotted');
};

