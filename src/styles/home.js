import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "App": {
        "fontFamily": "'Prompt', sans-serif",
        "textAlign": "center",
        "backgroundColor": "#455A64"
    },
    "color-wash": {
        "background": "linear-gradient(      rgba(189, 189, 189, 0.20),      rgba(189, 189, 189, 0.20)    ),   url(../../public/assets/topoSM.jpg)",
        "backgroundSize": "cover"
    },
    "about-me": {
        "textAlign": "center",
        "color": "#FF5722",
        "paddingTop": 80,
        "paddingBottom": 70
    },
    "name": {
        "fontSize": 3.5,
        "fontFamily": "'Prompt', sans-serif",
        "fontWeight": "400",
        "lineHeight": 1,
        "marginBottom": 15
    },
    "about-text": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "color": "white",
        "fontSize": 2,
        "lineHeight": 32,
        "width": "90%"
    },
    "lower": {
        "marginTop": 30
    }
});