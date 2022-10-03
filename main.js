// console.log('hello, world');

var imageUrls = [
  // 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  // 'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  // 'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  // 'https://static.toiimg.com/photo/74674393.cms?imgsize=317708'
];

var $imageUrlInput = document.querySelector('input');
// console.log($imageUrlInput);

var $addImageButton = document.querySelector('button');
// console.log($addImageButton);

var $gallery = document.querySelector('main');

$addImageButton.addEventListener('click', addImageButtonClicked);

function addImageButtonClicked() {
  // console.log($imageUrlInput.value);
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    updateGallery();
    $imageUrlInput.value = '';
  }
}

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    // console.log($imageElement);
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
