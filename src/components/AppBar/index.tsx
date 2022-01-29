import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { createStyles, makeStyles } from '@mui/styles'
import { useColorMode } from 'hooks/useColorMode'
import { 
  AppBar as MuiAppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Avatar, 
  Tooltip, 
  MenuItem, 
  Theme
} from '@mui/material'

const menuOptions = [
  { title: 'Dark Mode', id: 'dark' },
  { title: 'Light Mode', id: 'light' }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      height: '80px',
      marginTop: '-10px',
      marginBottom: '-10px'
    }
  }),
)

export const AppBar = () => {
  const classes = useStyles()

  const { theme, setTheme } = useColorMode()

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <MuiAppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <img src={`${theme}Logo.svg`} alt='Youtube' className={classes.logo} />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar 
                  alt="Remy Sharp" 
                  src="https://yt3.ggpht.com/a-/AOh14GhTiYCPTFR0cQWjvKynpzti-6btplRKWQTlzuMbtF4=s108-c-k-c0x00ffffff-no-rj" 
                />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menuOptions.map((option) => (
                <MenuItem key={option.id} onClick={() => {
                  setTheme(option.id)
                  handleCloseUserMenu()
                }}>
                  <Typography textAlign="center">
                    {option.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};