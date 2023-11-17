import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

import { LogIn } from 'lucide-react';

import { Link } from 'react-router-dom';

// import { useState } from 'react';

import { useAuth } from '@/contexts';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

const Register = () => {
  const { register } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      name: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    register(values.username, values.name, values.password);
  }

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center">
      <Card className="mt-14 w-2/3 h-3/4 md:w-1/2 md:h-3/4 lg:mt-0 lg:w-1/3 lg:h-[55%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-full flex justify-between items-center flex-col'>
            <CardHeader className='w-full'>
              <CardTitle className="text-left">Register</CardTitle>
              <CardDescription className="text-left">Register an Account</CardDescription>
            </CardHeader>
            <CardContent className='w-full'>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="w-full">Username</FormLabel>
                      <FormControl>
                        <Input placeholder="ex: JohnDoe123" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                      username pengguna
                    </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="ex: John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>
                     Password pengguna
                   </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full flex">
                <LogIn />
                <span className="p-1">Register</span>
              </Button>
              <div>
                <span>Already have an account? </span>
                <Button variant="link" className="p-0">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
