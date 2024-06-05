import { About } from '@/components/About'
import { Advantages } from '@/components/Advantages'
import { Friends } from '@/components/Friends/Friends'
import { Header } from '@/components/Header/Header'
import { Prices } from '@/components/Prices'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills/Skills'
import { Box, Container } from '@mui/material'

export default function Home() {
  return (
    <Box component="main" bgcolor={'primary.main'} minHeight={'100%'}>
      <Container maxWidth="xl">
        <Header />
        <About />
        <Friends />
        <Skills />
        <Advantages />
        <Projects />
        <Prices />
      </Container>
    </Box>
  )
}
