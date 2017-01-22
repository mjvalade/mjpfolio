import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "title": {
        "fontSize": 5,
        "fontFamily": "'Open Sans', sans-serif",
        "fontWeight": "400",
        "textTransform": "uppercase",
        "lineHeight": 1.125,
        "marginBottom": 0,
        "marginTop": 100,
        "marginLeft": 40
    },
    "project-body": {
        "marginLeft": 40,
        "width": "90%",
        "maxWidth": "75ch"
    },
    "project-text": {
        "fontSize": 20,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 0,
        "maxWidth": "75ch"
    },
    "a": {
        "textDecoration": "none",
        "color": "#FF5722"
    },
    "a:hover": {
        "color": "black"
    },
    "screenshot": {
        "width": "70%",
        "border": "1px solid black",
        "marginBottom": 40,
        "marginTop": 20
    }
});