alert ('よく見つかりました！この先飯テロ注意！');

function showImage(src) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    var enlargedImage = document.createElement('img');
    enlargedImage.src = src;
    enlargedImage.className = 'enlarged-image';

    overlay.appendChild(enlargedImage);
    
    overlay.onclick = function () {
        overlay.remove();
    };
    
    document.body.appendChild(overlay);
}

