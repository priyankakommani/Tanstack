import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <Button className='mt-2 bg-green-600' onClick={() => navigate({ to: '/users' })} >Click Me</Button>
    </div>
  )
}
