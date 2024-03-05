import { Grid, useTheme, Box, CircularProgress, Button, Stack, Paper } from "@mui/material"
import { Link } from "react-router-dom"
function Index() {
    const theme = useTheme()
    return (
        <Grid container spacing={2} sx={{ pt: `${theme.mixins.toolbar.minHeight}px` }}>
            <Grid item xs={12} md={6} lg={3}>   
                <Paper elevation={5} sx={{ padding: 2, margin: 2, backgroundColor: "inherit", borderRadius: 2}}>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <CircularProgress size='2rem'/>
                        <Link to="loader">
                            <Button variant="contained">Loader</Button>
                        </Link> 
                    </Stack>    
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <div>
                    <h1>Home</h1>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <div>
                    <h1>Home</h1>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <div>
                    <h1>Home</h1>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <div>
                    <h1>Home</h1>
                </div>
            </Grid>
        </Grid>
    )
}

export default Index