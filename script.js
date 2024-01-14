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
    if (document.getElementById('logo').src.includes('ramen.png')) {
        window.location.href = url;
    }
}
