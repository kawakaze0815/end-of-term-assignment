// script.js
document.addEventListener('DOMContentLoaded', function () {
    // ヘッダーのスタイルを変更
    var header = document.getElementById('header');
    header.style.backgroundColor = '#3498db';
    header.style.padding = '10px';
    header.style.textAlign = 'center';
    header.style.color = '#fff';

    // フッターのスタイルを変更
    var footer = document.getElementById('footer');
    footer.style.backgroundColor = '#2c3e50';
    footer.style.padding = '10px';
    footer.style.textAlign = 'center';
    footer.style.color = '#fff';
});

function imgchange1() {
    document.getElementById('logo').src = './image/ramen.png';
}

function imgchange2() {
    document.getElementById('logo').src = './image/tea.png';
}

function redirectToURL(url) {


function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 50, // 50は余白分の調整、必要に応じて調整してください
            behavior: 'smooth'
        });
    }
}

// ナビゲーションリンクがクリックされたときの処理
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // # を除去
        smoothScroll(targetId);
    });
});

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

document.addEventListener('DOMContentLoaded', function () {
    const scrollTopButton = document.getElementById('scrollTopButton');

    // スクロールが一定以上になったらボタンを表示
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // ボタンがクリックされたらページのトップにスクロール
    scrollTopButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

    if (document.getElementById('logo').src.includes('ramen.png')) {
        window.location.href = url;
    }
}
