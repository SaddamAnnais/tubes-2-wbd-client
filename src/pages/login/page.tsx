import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

import { LogIn } from 'lucide-react';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-0">
      <Card className="w-1/3 h -1/2">
        <CardHeader>
          <CardTitle className="text-left">Login</CardTitle>
          <CardDescription className="text-left">Log into your Premium Creator Account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username" className="text-left">
                  Username
                </Label>
                <Input id="username" placeholder="ex: JohnDoe123" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-left">
                  Password
                </Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full flex">
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
      </Card>
    </div>
  );
};

export default Login;
