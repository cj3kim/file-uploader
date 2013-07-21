function handleFileDrop(e) {
  e.preventDefault();
  e.stopPropagation();

  gl = null;
  file = e.dataTransfer.files.item(0);
  var self   = this
    , reader = new FileReader();

  reader.onload = function (e) {
    console.log(e.target.result);
    console.log(e.target.result.length);
    gl = e.target;

    //arrBuff = new ArrayBuffer(e.target.result.length);
    //writer = new Uint8Array(arrBuff);
    //for (var i = 0, len = e.target.result.length; i < len; i++) {
        //writer[i] = e.target.result.charCodeAt(i);
    //}

    $.ajax({
      type: "POST",
      url: "/imagepost",
      processData: false,
      data: e.target.result,
      success: function () { alert('posted!') },
      error: function () { alert('not posted')}
    });

  };

  reader.readAsBinaryString(file);

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

