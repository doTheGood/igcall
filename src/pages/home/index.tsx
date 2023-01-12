import { Heading, Text } from '@pal-land/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUserNameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Easy scheduling
        </Heading>
        <Text size="xl">
          Connect your calender and allow people to schedule meetings with you.
        </Text>
        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calender representing the application"
        />
      </Preview>
    </Container>
  )
}
