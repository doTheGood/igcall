import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextInput } from '@pal-land/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Container, Form, FormError, Header } from './styles'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Must have at least 3 characters.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Only letters and hyphen',
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'Must have at least 3 characters' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to ICall</Heading>
        <Text>
          Please complete some information for your profile. You can always edit
          after that
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">User name</Text>
          <TextInput
            prefix="pal.land/"
            placeholder="your name"
            {...register('username')}
          />
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>
        <label>
          <Text size="sm">Full name</Text>
          <TextInput placeholder="your name" {...register('name')} />
          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>
        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}