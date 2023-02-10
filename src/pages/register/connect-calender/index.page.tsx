import { Button, Heading, MultiStep, Text } from '@pal-land/react'
import { ArrowRight, LineSegment } from 'phosphor-react'
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'
import { signIn } from 'next-auth/react'

export default function Register() {
  // const session = useSession()
  // async function handleRegister() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Connect your schedule</Heading>
        <Text>
          When your calender connects with igcall you can verify automatically
          new events and blocked times as soon as they are created.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calender</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Connect your Google Account
            <LineSegment weight="bold" />
          </Button>
        </ConnectItem>
        {/* <Text>{JSON.stringify(session.data)}</Text> */}
        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
