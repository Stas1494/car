const popupLink = document.querySelector('.popup-link');

popupLink.addEventListener("click", function (e) {
    const popupName = popupLink.getAttribute('href').replace('#', '');
    const curentPopup = document.getElementById(popupName);
    popupOpen(curentPopup);
    e.preventDefault();
});
// ==========================================================================
const popupCloseIcon = document.querySelector('.popup-close');

popupCloseIcon.addEventListener("click", function (e) {
    popupClose(popupCloseIcon.closest('.popup'));
    e.preventDefault();
});

// ============================================================================

function popupOpen(curentPopup) {
    if (curentPopup) {
        curentPopup.classList.add('open');
    }
}
function popupClose(popupActive) {
    popupActive.classList.remove('open');
}