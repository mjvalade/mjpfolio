import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header-container": {
        "background": "#323232",
        "height": 75,
        "width": "100%",
        "position": "fixed",
        "top": 0,
        "zIndex": 1
    },
    "header-title": {
        "fontFamily": "'Open Sans', sans-serif",
        "fontWeight": "300",
        "float": "left",
        "marginLeft": 8,
        "marginRight": 8,
        "marginTop": 15,
        "fontSize": "150%",
        "color": "white",
        "lineHeight": 1.25
    },
    "icon": {
        "float": "left",
        "height": 90,
        "width": 120,
        "backgroundColor": "#FF5722",
        "marginLeft": 20
    },
    "icon:hover": {
        "backgroundColor": "#BDBDBD"
    },
    "header-title:hover": {
        "color": "#FF5722"
    },
    "nav": {
        "float": "right",
        "marginTop": 25,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "top": {
        "fontFamily": "'Prompt', sans-serif",
        "textDecoration": "none",
        "color": "white",
        "marginLeft": 10
    },
    "top:hover": {
        "color": "#FF5722",
        "textDecoration": "none"
    }
});