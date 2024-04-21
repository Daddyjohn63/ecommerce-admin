'use client';
import axios from 'axios';
import * as z from 'zod';
import { useState } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal'; //zustand
import { Modal } from '@/components/ui/modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const formSchema = z.object({
  name: z.string().min(1)
});

//component is listening to any changes in the zustand state.
export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      //throw new Error('x');   just testing error response form toast
      const response = await axios.post('/api/stores', values);

      window.location.assign(`/${response.data.id}`); //use instead of next router, because this will mean the page will get refreshed and we will then know that the db has been created.
    } catch (error) {
      toast.error('something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    // call Modal and pass in props
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="E-Commerce" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end">
                <Button disabled={loading} variant="outline" onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
