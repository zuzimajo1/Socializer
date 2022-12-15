import React from 'react'

import { styled, Skeleton } from "@mui/material";

type Props = {
    variant: "text" | "circular" | "rectangular" | "rounded";
    width?: string;
    height?: string;
    fontSize?: string;
    padding?:string;
    margin?: string;

}

const SkeletonContents = (props: Props) => {
  return (
      <SkeletonDisplay animation="wave" {...props}/>
  )
}


const SkeletonDisplay = styled(Skeleton)<{ width?: string, height?: string, padding?: string, margin?:string}>(({theme, padding, width, height, margin})=>({
    width,
    height,
    padding,
    margin,
}))




export default SkeletonContents