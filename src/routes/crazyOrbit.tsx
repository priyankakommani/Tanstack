import { createFileRoute } from '@tanstack/react-router'
import { AboutPage } from '../components/crazyOrbit'

export const Route = createFileRoute('/crazyOrbit')({
  component: AboutPage,
})
