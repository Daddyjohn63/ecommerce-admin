'use client';

import { useStoreModal } from '@/hooks/use-store-modal'; //zustand
import { Modal } from '@/components/ui/modal';
//component is listening to any changes in the zustand state.
export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    // call Modal and pass in props
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
