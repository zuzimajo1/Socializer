
export interface ContainerProp {
    display ?: string;
    vertical ?:boolean;
    flexDirection ?: string;
    justifyContent ?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
    alignItems ?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
    width ?: "100%" | "auto" | string;
    height ?: "100vh" | "auto" | string;
    padding ?: string;
    border?: string;
    backgroundColorLight ?: string;
    backgroundColorDark  ? : string;
    borderRadius? : string;
    margin ?: string;
}