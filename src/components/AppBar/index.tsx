import * as React from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { useColorMode } from 'hooks/useColorMode'

import {
  styled,
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
  Theme,
  InputBase 
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SearchIcon from '@mui/icons-material/Search';

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
    },
    iconsWrapper: {
      width: '204px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        width: 'unset',
      },
    },
    avatar: {
      height: '35px',
      width: '35px',
    },
    micIcon: {
      background: theme.palette.mode === 'dark' 
        ? 'rgba(0, 0, 0, 0.4)' 
        : 'rgba(0, 0, 0, 0.025)',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  })
)

const Search = styled('div')(({ theme }) => ({
  flexGrow: 2,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #313131',
  background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'none',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '638px',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const AppBar = () => {
  const classes = useStyles()

  const { theme, setTheme } = useColorMode()

  const [user] = React.useState({
    name: 'Matheus Baron',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhTiYCPTFR0cQWjvKynpzti-6btplRKWQTlzuMbtF4=s108-c-k-c0x00ffffff-no-rj'
  })

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

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

          <Search>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <IconButton 
            size="large" 
            color="inherit" 
            className={classes.micIcon}
          >
            <MicOutlinedIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 0 }}>
            <Box className={classes.iconsWrapper} >
              <Box sx={{ display: { xs: 'block', sm: 'none' } }} >
                <IconButton size="large" color="inherit">
                  <SearchIcon />
                </IconButton>

                <IconButton size="large" color="inherit">
                  <MicOutlinedIcon />
                </IconButton>
              </Box>

              <IconButton size="large" color="inherit">
                <VideoCallOutlinedIcon />
              </IconButton>

              <IconButton size="large" color="inherit">
                <AppsOutlinedIcon />
              </IconButton>

              <IconButton size="large" color="inherit">
                <NotificationsNoneOutlinedIcon />
              </IconButton>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar
                    className={classes.avatar}
                    alt="Remy Sharp" 
                    src={user.avatar} 
                  />
                </IconButton>
              </Tooltip>
            </Box>
            
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