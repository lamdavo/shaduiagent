'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '@/app/context/store';
import Icons from '@/components/Icons';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(5, { message: 'Username must be at least 5 characters long' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

function UserAuthForm() {
  const [isloading, setIsLoading] = useState(false);
  const { username, isLogin, setUsername, setIsLogin } = useGlobalContext();

  const router = useRouter();

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // define submit handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    // do something with the form values.
    // this will be type-safe and validated by zod
    setUsername(data.username);
    setIsLogin(true);
    router.push('/home');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='username' {...field} disabled={isloading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder='password'
                  {...field}
                  type='password'
                  disabled={isloading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit' disabled={isloading}>
          {isloading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
export default UserAuthForm;
