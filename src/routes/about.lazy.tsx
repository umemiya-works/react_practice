import { createLazyFileRoute } from '@tanstack/react-router'
import AboutPage from '../features/about/AboutPage'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      <AboutPage />
    </>
  )
}
