// import { useState } from 'react';

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

import { useAuth } from '@/contexts';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

const Login = () => {
  const { login } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    login(values.username, values.password);
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-0">
      <Card className="w-1/2 h-2/3 lg:w-1/3 lg:h-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-full flex justify-between items-center flex-col'>
            <CardHeader className='w-full'>
              <CardTitle className="text-left">Login</CardTitle>
              <CardDescription className="text-left">Log into your Premium Creator Account</CardDescription>
            </CardHeader>

            <CardContent className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-left">Username</FormLabel>
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
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          //  value={foronChangeInput}
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
              <Button type="submit" className="w-full flex">
                <LogIn />
                <span className="p-1">Login</span>
              </Button>
              <div>
                <span>Don't have any account? </span>
                <Button variant="link" className="p-0">
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
