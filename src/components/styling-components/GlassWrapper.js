import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    glass: {
        backgroundColor:"rgba(133,133,133,0.3)",
        backgroundImage: "linear-gradient(to bottom right, rgba(133,133,133,0.3), rgba(133,133,133,0.15))",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 2px 2px #ACE3D6",
        borderRadius: 30,
        borderLeft: "solid 2px rgba(172,227,214,0.3)",
        borderTop: "solid 1px rgba(254,118,65,0.8)",
        width: "97%",
        height: "auto",
        justifyContent:"center",
        padding: "1em",
        marginTop:"1em",
        marginBottom:"1em"
    }
})


export function GlassWrapper(props){
    const {...rest} = props
    const classes = useStyles()
    return <Box className={classes.glass} {...rest}/>
}