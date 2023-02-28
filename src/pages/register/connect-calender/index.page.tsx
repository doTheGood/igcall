import { Button, Heading, MultiStep, Text } from '@pal-land/react'
import { ArrowRight, Check, LineSegment } from 'phosphor-react'
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Register() {
  const session = useSession()
  const router = useRouter()
  const hasAuthError = !!router.query.error

  const isSignedIn = session.status === 'authenticated'

  async function handleConnectGoogleCalendar() {
    await signIn('google')
  }
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
          {isSignedIn ? (
            <Button variant="secondary" size="sm" disabled>
              Connected
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectGoogleCalendar}
            >
              Connect your Google Account
              <LineSegment weight="bold" />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AuthError size="sm">
            Error to connect with Google Account. Please check if you allowed
            the iCall App to access your Calendar.
          </AuthError>
        )}
        <Button type="submit" disabled={!isSignedIn}>
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
