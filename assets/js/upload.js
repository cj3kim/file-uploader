function handleFileDrop(e) {
  e.preventDefault();
  e.stopPropagation();

  files = e.dataTransfer.files;

  return false;
};

function handleDragOver(e) {
  console.log('over');
  e.preventDefault();
  e.stopPropagation();

  return false;
};

function handleDragEnter(e) {
  console.log('enter');
  e.preventDefault();
  e.stopPropagation();

  this.classList.add('dotted');

  return false;
};

function handleDragLeave(e) {
  console.log('leave');
  e.preventDefault();
  e.stopPropagation();

  this.classList.remove('dotted');
  return false;
};

