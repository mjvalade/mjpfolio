import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "footer": {
        "alignContent": "flex-start",
        "background": "#BDBDBD",
        "display": "flex",
        "flexDirection": "column",
        "fontFamily": "'Prompt', sans-serif",
        "height": "25%",
        "paddingBottom": 30,
        "paddingLeft": "20%",
        "paddingTop": 10,
        "transition": "1s"
    },
    "footer-title": {
        "fontFamily": "'Prompt', sans-serif",
        "fontWeight": "400",
        "marginBottom": 0,
        "marginTop": 0
    },
    "footer img": {
        "display": "inline-flex",
        "flexDirection": "row",
        "height": 44,
        "width": 44,
        "marginRight": 10,
        "paddingTop": 5
    },
    "education": {
        "flex": "2 1 30%",
        "paddingTop": 10,
        "paddingLeft": 10,
        "marginBottom": 10
    },
    "past-life": {
        "flex": "1 1 30%",
        "paddingTop": 10,
        "paddingLeft": 10,
        "marginBottom": 10
    },
    "contact": {
        "flex": "1 1 30%",
        "paddingTop": 10,
        "paddingLeft": 10,
        "marginBottom": 10
    }
});