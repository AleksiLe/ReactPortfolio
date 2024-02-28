import { Grid, useTheme, Box } from "@mui/material"
function Index() {
    const theme = useTheme()
    return (
        <Grid container spacing={2} sx={{ pt: `${theme.mixins.toolbar.minHeight}px` }}>
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
            <Grid item xs={12} md={6} lg={3}>
                <div>
                    <h1>Home</h1>
                </div>
            </Grid>
        </Grid>
    )
}

export default Index