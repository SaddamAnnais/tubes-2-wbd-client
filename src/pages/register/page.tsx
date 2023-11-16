import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

import { LogIn } from 'lucide-react';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import { useAuth } from '@/contexts';

const Register = () => {
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    password: '',
  });

  const OnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                <Input
                  value={formData.username}
                  onChange={OnChangeInput}
                  name="username"
                  placeholder="ex: JohnDoe123"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-left">
                  Name
                </Label>
                <Input value={formData.name} onChange={OnChangeInput} name="name" placeholder="ex: John Doe" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-left">
                  Password
                </Label>
                <Input
                  value={formData.password}
                  onChange={OnChangeInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            onClick={() => {
              register(formData.username, formData.name, formData.password);
            }}
            className="w-full flex"
          >
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
