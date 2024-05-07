import prismadb from '@/lib/prismadb';
import { BillboardFormForm } from './components/billboard-form';

export const revalidate = 3;

const BillboardPage = async ({ params }: { params: { billboardId: string } }) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId
    }
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardFormForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
