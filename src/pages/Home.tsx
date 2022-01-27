import React, { useState } from 'react'
import { videos } from '../mocks/videos'
import { Box, Container, Grid } from '@mui/material'
import { AppBar } from '../components/AppBar'
import Video from '../components/Video'
import { IVideo } from '../interfaces/IVideo'

const Home: React.FC = () => {
  const [data] = useState(() => {
    const arr: IVideo[] = []

    for (let i = 0;  i < 7; i++) {
      arr.push(...videos)
    }

    return arr
  })

  return (
    <Box mt='100px' mb='40px' >
      <AppBar />

      <Container>
        <Grid container spacing={2}>
          {data.map(video => (
            <Grid item key={video.title} lg={3} md={4} sm={6} xs={12}>
              <Video data={video} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}   

export default Home