import React from 'react'
import { Box, Avatar, Theme, Typography, Stack } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { IVideo } from '../../interfaces/IVideo'
  
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thumb: {
      maxWidth: '100%'
    },
    avatar: {
      height: '36px',
      width: '36px',
      marginRight: theme.spacing(2)
    },
    infosWrapper: {
      display: 'flex',
	    marginTop: theme.spacing(1),
      paddingRight: theme.spacing(3)
    },
    title: {
      fontWeight: 500,
      marginBottom: theme.spacing(1)
    }
  }),
)

interface VideoProps {
  data: IVideo
}

const Video: React.FC<VideoProps> = ({ data }) => {
  const classes = useStyles()

  return (
    <Box>
      <img src={data.thumb} alt={data.title} className={classes.thumb} />

      <Box className={classes.infosWrapper} >
        <Avatar src={data.avatar} className={classes.avatar} />
        
        <Stack >
          <Typography variant='h1' className={classes.title} >
            {data.title}
          </Typography>
          
          <Typography variant='h2' >
            {data.channel}
          </Typography>

          <Typography variant='h2' >
            {data.views} views {data.launchedIn} ago
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default Video