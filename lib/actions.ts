'use server';

import { revalidatePath } from 'next/cache';

import { redirect } from 'next/navigation';

export async function revalidateBillboards() {
  revalidatePath('/[storeId]/billboards', 'page');
  redirect('/[storeId]/billboards');
}

// export async function revalidateBillboards(params: any) {
//   revalidatePath('/[storeId]/billboards', 'page');
//   redirect(`/${params}/billboards`);
// }

// export async function revalidateAll() {
//   revalidatePath('/');
//   redirect('/[storeId]/billboards');
// }
