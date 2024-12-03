// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

// import styling
import "./ui/style.css";
import "./ui/css/welcome-popup.css";
import "./ui/css/bottom-nav.css";

// import js components
import { handlePopup } from "./ui/popupHandler";
import { handle3DModelAudio } from "./audio/audioHandler";

AFRAME.registerComponent("handle-popup", handlePopup);
AFRAME.registerComponent("handle-3d-model-audio", handle3DModelAudio);
