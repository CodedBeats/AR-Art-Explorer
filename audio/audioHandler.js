const handle3DModelAudio = {
    init() {
        // sounds
        const ignite = new window.Howl({
            src: [require("../assets/audio/yoda-audio1.mp3")],
        });
        const sheath = new window.Howl({
            src: [require("../assets/audio/yoda-audio2.mp3")],
        });
        const camelSound1 = new window.Howl({
            src: [require("../assets/audio/camel-audio1.mp3")],
        });
        const camelSound2 = new window.Howl({
            src: [require("../assets/audio/camel-audio2.mp3")],
        });
        const flowersSound1 = new window.Howl({
            src: [require("../assets/audio/flowers-audio1.mp3")],
        });
        const flowersSound2 = new window.Howl({
            src: [require("../assets/audio/flowers-audio2.mp3")],
        });

        // handle sounds for each model
        const handleFoundTarget = ({ detail }) => {
            if (detail.name === "2D-yoda-drawing") {
                ignite.play();
            }
            if (detail.name === "2D-super-lama") {
                camelSound1.play();
            }
            if (detail.name === "2D-chinese-flowers") {
                flowersSound1.play();
            }
            // === debug ===
            // console.log(detail.name)
            // document.getElementById('expand-scannable-btn').innerHTML = 'found target'
        };
        const handleLostTarget = ({ detail }) => {
            if (detail.name === "2D-yoda-drawing") {
                sheath.play();
            }
            if (detail.name === "2D-super-lama") {
                camelSound2.play();
            }
            if (detail.name === "2D-chinese-flowers") {
                flowersSound2.play();
            }
            // debug
            // console.log(detail.name)
            // document.getElementById('expand-scannable-btn').innerHTML = 'lost target'
        };

        // add sounds on target image detection
        this.el.sceneEl.addEventListener("xrimagefound", handleFoundTarget);
        this.el.sceneEl.addEventListener("xrimagelost", handleLostTarget);
    },
};
export { handle3DModelAudio };
