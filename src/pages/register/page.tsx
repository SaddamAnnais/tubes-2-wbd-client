import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

import { LogIn } from 'lucide-react';

import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center">
      <Card className="w-1/3 h -1/2">
        <CardHeader>
          <CardTitle className="text-left">Register</CardTitle>
          <CardDescription className="text-left">Register </CardDescription>
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
                <Label htmlFor="name" className="text-left">
                  Name
                </Label>
                <Input id="name" placeholder="ex: John Doe" />
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
            <span className="p-1">Register</span>
          </Button>
          <div>
            <span>Already have an acoount? </span>
            <Button variant="link" className="p-0">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
