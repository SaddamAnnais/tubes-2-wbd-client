import { useAuth } from '@/contexts';

const Root = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <main className="w-full h-full pt-32 py-8 px-10 sm:px-20 justify-start">
        <div className="w-full h-full flex flex-col sm:flex-row items-center gap-6">
          <img className="h-full aspect-square" src="/logo-no-bg.png" alt="logo" />
          <div className="flex flex-col ">
            <header className="flex flex-col gap-4 items-start mb-7">
              <h1 className="font-bold text-2xl">Hi, {user.name} !</h1>
              <h1 className="text-xl">Welcome to</h1>
            </header>
            <div className="flex flex-row items-center justify-start">
              <p className="text-6xl font-semibold mr-2">Cooklyst</p>
              <p className="text-xl font-light mb-4">PRO</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Root;
