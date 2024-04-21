import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  //in the root layout we do not have the store id, so we will attempt to load the first one.
  const store = await prismadb.store.findFirst({
    where: {
      userId: userId
    }
  });
  //if there is a store, redirect them to the first store.
  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
