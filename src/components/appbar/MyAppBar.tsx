import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box, Toolbar, AppBar, Link, Typography } from '@mui/material';

export default function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link href="/" color="inherit" underline="none">
            <HomeRoundedIcon />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
