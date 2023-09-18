import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import Container from './container'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { toast } from './ui/use-toast'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
})

type formValues = z.infer<typeof formSchema>

const Subscribe = () => {

  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: formValues) => {
    console.log(data)
    toast({
      title: 'Thanks for subscribing!',
      description: 'You will hear from us soon!',
    })
    form.reset()
  }

  return (
    <div className='py-12 bg-indigo-600'>
      <Container>
        <div className='flex items-center flex-col gap-y-6'>
          <h3 className='text-white font-semibold text-lg text-center uppercase' style={{ letterSpacing: '4px' }}>
            35,000+ already joined
          </h3>
          <h2 className='text-white text-center font-medium text-3xl max-w-md'>
            Stay up-to-date with what we're doing
          </h2>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)} 
                className=' 
                  w-full   
                  grid
                  grid-cols-12
                  gap-2'
              >
                <FormField
                  name='email'
                  render={({ field }) => (
                    <FormItem className='col-span-12 lg:col-span-9 '>
                      <FormControl className='m-0 p-0'>
                        <Input
                          id='prompt'
                          className='border-0 outline-none p-3 focus-visible:ring-0 focus-visible:ring-transparent'
                          disabled={form.formState.isSubmitting}
                          placeholder='Enter your email address'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='bg-red-500 p-2 text-white font-medium transform translate-y-1'/>
                    </FormItem>
                  )}
                />
                <Button
                  className='col-span-12 lg:col-span-2 w-full'
                  type='submit'
                  disabled={form.formState.isSubmitting}
                  size='lg'
                  variant={'destructive'}
                >
                  Contact Us
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Subscribe