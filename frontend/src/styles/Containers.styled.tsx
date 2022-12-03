import { styled } from "@mui/material";
import { ContainerProp } from "../utils/types";


export const Container = styled('div')<ContainerProp>((props) => ({
    display: props.display,
    width: props.width,
    height: props.height,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    padding: props.padding,
    border: props.border,
    margin: props.margin,
    borderRadius: props.borderRadius,
    flexDirection: props.vertical ? "column" : "row",
    backgroundColor: props.theme.palette.mode === "light" ? props.backgroundColorLight : props.backgroundColorDark,
}))

export const MainContainer = styled('main')({
    width: "100%",
    height: "auto",
})

export const AutoVerticalContainer = styled('div')(({theme})=>({
    display: "flex",
    height: "auto",
    flexDirection: "column",
    padding: "var(--padding-lg) var(--padding-md)",
    backgroundColor: theme.palette.mode === "light" ? "#e4f0ef" : "#535151",
    borderRadius: "0.5rem",

    [theme.breakpoints.down("md")]: {
      padding: "var(--padding-md) var(--padding-xs)",
    }

}))

export const FullWidthCenterVerticalContainer = styled('div')(({theme})=> ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}))

export const FullWidthStartVertificalContainer = styled('div')<{ alignItems?: string}>(({theme, alignItems})=> ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems,

    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        alignItems: "center",
    }
}))

export const FullPaddingContainer = styled('div')(({theme})=>({
    width: "100%",
    height: "auto",
    display: "flex",
    padding: "5rem var(--padding-6xl) var(--padding-2xl) var(--padding-6xl)",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    }
}))

export const FullWidthCenterPaddingContainer = styled('div')(({theme})=>({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "4.5rem",

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    }
}))