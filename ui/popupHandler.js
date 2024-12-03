const handlePopup = {
    init() {
        // welcome popup
        const popup = document.getElementById("welcome-popup");
        const closeBtn = document.getElementById("popup-close-btn");

        // scannable imgs
        const scannableImgs = document.getElementById(
            "scanable-imgs-container"
        );
        const toggleScannableImages = document.getElementById(
            "expand-scannable-btn"
        );

        // click events
        const handleCloseBtnClick = () => {
            popup.style.setProperty("transform", "translateY(500px)");
            // === debug ===
            // console.log('exit welcome')
        };
        const handleToggleScannableImagesClick = () => {
            if (toggleScannableImages.innerHTML === "Scannable Images ^") {
                // open/reveal imgs div
                scannableImgs.style.setProperty(
                    "transform",
                    "translateY(-40px)"
                );
                toggleScannableImages.innerHTML = "Scannable Images v";
            } else {
                // close/hide imgs div
                scannableImgs.style.setProperty(
                    "transform",
                    "translateY(400px)"
                );
                toggleScannableImages.innerHTML = "Scannable Images ^";
            }
            // === debug ===
            // console.log('toggle scanable imgs')
        };

        // add click events to btns
        closeBtn.addEventListener("click", handleCloseBtnClick);
        toggleScannableImages.addEventListener(
            "click",
            handleToggleScannableImagesClick
        );
    },
};
export { handlePopup };
