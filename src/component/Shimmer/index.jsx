import { Box, Skeleton } from "@mui/material";
import React from "react";


export const ProductCartShimmer =()=>{
    return(
        <>
        <Box sx={{display:"flex", marginBottom:"10px", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        </Box>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        <Skeleton variant="rectangular" width={260} height={370} style={{backgroundColor:"grey", borderRadius:"20px"}}/>
        </Box>
        </>
    )
};


export const ProductSuggestionsShimmer = ()=>{
    return(
        <>
        <Box sx={{display:"flex", marginBottom:"10px", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
        <Skeleton variant="rectangular" animation={true} width={200} height={150} style={{backgroundColor:"grey", borderRadius:"20px", border:"1px solid black"}}/>
      
        </Box>
        </>
    )
}