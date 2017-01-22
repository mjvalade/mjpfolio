import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "all-projects": {
        "display": "flex",
        "flexWrap": "wrap",
        "fontFamily": "'Prompt', sans-serif",
        "fontWeight": "300",
        "width": "100%",
        "textAlign": "center",
        "alignItems": "center",
        "justifyContent": "center",
        "borderCollapse": "collapse",
        "color": "white",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "project": {
        "flex": "1 400px",
        "height": 400,
        "textDecoration": "none",
        "position": "relative"
    },
    "overlay": {
        "display": "none"
    },
    "project:hover overlay": {
        "top": 0,
        "left": 0,
        "display": "flex",
        "justifyContent": "center",
        "width": "100%",
        "height": "100%",
        "opacity": 0.8,
        "position": "relative"
    },
    "projecta": {
        "background": "url(../../public/assets/hikecropped.jpeg) center",
        "backgroundSize": "cover"
    },
    "projecta:hover": {
        "color": "white",
        "fontSize": 2
    },
    "projecta:hover overlay": {
        "background": "#455A64",
        "display": "flex",
        "flexDirection": "column"
    },
    "overlay-title": {
        "display": "flex",
        "marginTop": "10%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "overlay-about": {
        "display": "flex",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "projectb": {
        "background": "url(../../public/assets/weatherdetail.jpeg) center",
        "backgroundSize": "cover",
        "flex": "2 600px"
    },
    "projectb:hover": {
        "color": "white",
        "fontSize": 2
    },
    "projectb:hover overlay": {
        "background": "#FF5722",
        "display": "flex",
        "flexDirection": "column"
    },
    "projectc": {
        "background": "url(../../public/assets/writing-small.jpeg) center",
        "backgroundSize": "cover",
        "flex": "2 600px"
    },
    "projectc:hover": {
        "color": "white",
        "fontSize": 2
    },
    "projectc:hover overlay": {
        "background": "#388E3C",
        "display": "flex",
        "flexDirection": "column"
    },
    "projectd": {
        "background": "url(../../public/assets/tomato-small.jpeg)",
        "backgroundSize": "cover"
    },
    "projectd:hover": {
        "color": "white",
        "fontSize": 2
    },
    "projectd:hover overlay": {
        "background": "#FF5722",
        "display": "flex",
        "flexDirection": "column"
    },
    "projecte": {
        "background": "url(../../public/assets/keyboard-small.jpeg) center",
        "backgroundSize": "cover"
    },
    "projecte:hover": {
        "color": "white",
        "fontSize": 2
    },
    "projecte:hover overlay": {
        "backgroundColor": "#303F9F",
        "display": "flex",
        "flexDirection": "column"
    }
});