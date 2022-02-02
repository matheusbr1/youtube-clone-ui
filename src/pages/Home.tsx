import React, { useState } from 'react'
import { videos } from 'mocks/videos'
import { Box, Container, Grid } from '@mui/material'
import { AppBar } from 'components/AppBar'
import Video from 'components/Video'
import { IVideo } from 'interfaces/IVideo'
import ChipList from 'components/ChipList'

const Home: React.FC = () => {
  const [data] = useState(() => {
    const arr: IVideo[] = []

    for(let i = 0; i < 32; i++) {
      arr.push(...videos)
    }

    return arr
  })

  return (
    <Box>
      <AppBar />
      <ChipList />

      <Container>
        <Box mt='150px' mb='30px' >
          <Grid container spacing={2}>
            {data.map((video, index) => (
              <Grid item key={video.title + index} lg={3} md={4} sm={6} xs={12}>
                <Video data={video} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}   

export default Home