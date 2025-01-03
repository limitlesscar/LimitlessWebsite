'use client';
import { useRouter } from 'next/navigation';    
import { useEffect, useState } from 'react';

export default function NotFound() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Set state to true once the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleGoHome = () => {
    if (isClient) {
      router.push('/'); // Redirige vers la page d'accueil
    }
  };

  // Render nothing or a loading state until the component is mounted
  if (!isClient) {
    return null; // Or you could return a loading spinner, etc.
  }

  return (
    <>
      <main className="relative isolate min-h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          className="absolute inset-0 -z-10 size-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base/8 font-semibold text-white">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Page non trouvée
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-white/70 sm:text-xl/8">
            Désolé, nous n’avons pas trouvé la page que vous cherchez.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleGoHome} // Lors du clic, redirige vers l'accueil
              className="text-sm/7 font-semibold text-white"
            >
              <span aria-hidden="true">&larr;</span> Retour à l'accueil
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
