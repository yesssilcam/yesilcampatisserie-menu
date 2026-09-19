// KATEGORİYE TIKLANDIĞINDA SADECE O KATEGORİNİN ÜRÜNLERİNİ AÇAR
function showCategory(categoryId) {
    // 1. Ana kategori ve favoriler alanını gizle
    document.getElementById('main-sections').style.display = 'none';
    
    // 2. Bütün menü listelerini gizle
    const blocks = document.querySelectorAll('.menu-block');
    blocks.forEach(block => block.style.display = 'none');
    
    // 3. Sadece seçilen kategorinin ürün listesini göster
    const targetBlock = document.getElementById(categoryId);
    if (targetBlock) {
        targetBlock.style.display = 'block';
    }
    
    // 4. "Geri Dön" butonunu göster ve ekranı en üste kaydır
    document.getElementById('back-button-container').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ANA MENÜYE GERİ DÖNÜŞ FONKSİYONU
function showAllCategories() {
    // 1. Ana kategorileri tekrar göster
    document.getElementById('main-sections').style.display = 'block';
    
    // 2. Tüm ürün listelerini tekrar gizle
    const blocks = document.querySelectorAll('.menu-block');
    blocks.forEach(block => block.style.display = 'none');
    
    // 3. Geri dön butonunu gizle
    document.getElementById('back-button-container').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// MODAL / POPUP İŞLEMLERİ
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
}

function openImgModal(imgSrc) {
    const modalImg = document.getElementById('modalImg');
    const imgModal = document.getElementById('imgModal');
    if (modalImg && imgModal) {
        modalImg.src = imgSrc;
        imgModal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
// Sayfa açılır açılmaz ekrana getir
window.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('welcomeModal');
    if (modal) {
        modal.style.display = 'flex';
    }
});
function closePopup() {
    var modal = document.getElementById('welcomeModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    var modal = document.getElementById('welcomeModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.querySelector('.popup-overlay');
    const closeBtn = document.querySelector('.popup-close');

    // Eğer sayfada pop-up varsa, kullanıcı kapatana kadar sayfayı kilitle
    if (popupOverlay) {
        document.body.classList.add('popup-locked');

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                popupOverlay.style.display = 'none';
                document.body.classList.remove('popup-locked'); // Kilidi kaldır, gezmeye izin ver
            });
        }
    }
});
function scrollSlider(direction) {
    const container = document.getElementById('favSlider');
    const scrollAmount = 160; // Ok tuşuna basıldığında kayma miktarı
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
