import { Button, Text, TextInput } from '@pal-land/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormAnnotation } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Must have at least 3 characters.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Only letters and hyphen.' })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export const ClaimUsernameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsernameForm(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsernameForm)}>
      <TextInput
        size="sm"
        prefix="callpal.com/"
        placeholder="your-user"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reserve user
        <ArrowRight />
      </Button>
      <FormAnnotation>
        <Text size={'xs'}>
          {errors.username ? (
            <span>{errors.username.message}</span>
          ) : (
            'At least 3 characters. Use only letters (Hyphens allowed).'
          )}
        </Text>
      </FormAnnotation>
    </Form>
  )
}
