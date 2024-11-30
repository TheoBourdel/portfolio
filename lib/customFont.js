import localFont from "next/font/local";

const myFont = localFont({
    src: [
        {
            path: "../public/fonts/PPFormula-CondensedBlack.otf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../public/fonts/PPFormula-CondensedExtralight.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../public/fonts/PPFormula-CondensedLightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../public/fonts/PPFormula-ExtendedBold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/PPFormula-ExtendedMedium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/PPFormula-Extrabold.otf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../public/fonts/PPFormula-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/PPFormula-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/PPFormula-MediumItalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../public/fonts/PPFormula-NarrowRegular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/PPFormula-NarrowSemibold.otf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-ppformula",
});

export default myFont;