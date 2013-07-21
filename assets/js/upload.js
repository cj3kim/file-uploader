function handleFileDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  var self = this
    , reader = new FileReader()
    , file = e.dataTransfer.files.item(0);

  reader.onload = function (e) {
    console.log(e.target.result);
    console.log(self)
    self.style.background = 'url(' + e.target.result + ') no-repeat center';
  };

  reader.readAsDataURL(file);

  return false;
};

function handleDragOver(e) {
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

