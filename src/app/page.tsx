import { About } from '@/components/About'
import { Friends } from '@/components/Friends/Friends'
import { Header } from '@/components/Header/Header'
import { Box, Container } from '@mui/material'

export default function Home() {
  return (
    <Box component="main" bgcolor={'primary.main'} minHeight={'100%'}>
      <Container maxWidth="xl">
        <Header />
        {/* <Box sx={{ height: '2000px' }} /> */}
        <About />
        <Friends />
      </Container>
    </Box>
  )
}
