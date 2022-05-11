import { Dialog, Transition } from "@headlessui/react";
import html2canvas from "html2canvas";
import { Fragment, useState } from "react";

interface DialogScreenshootProps {
  screenshot: string | undefined;
}

export default function DialogScheenshoot({
  screenshot,
}: DialogScreenshootProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" inset-0 flex">
        <button
          type="button"
          onClick={openModal}
          className="py-1 px-10 m-2 bg-zinc-700 rounded-md border-zinc-800 border-2 
          text-sm leading-6 hover:bg-zinc-800 transition-colors focus:outline-none 
          focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 
          disabled:opacity-50 disabled:hover:bg-brand-500 "
        >
          Screenshot
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-100 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
            <div className="flex p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="transform overflow-hidden rounded-2xl 
                bg-zinc-700 p-6 shadow-xl transition-all"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-zinc-100 text-center 
                    mb-2"
                  >
                    Screenshot
                  </Dialog.Title>
                  <div className="mt-4">
                    <img className="max-w-280 max-h-280" src={screenshot} />

                    <button
                      type="button"
                      className="px-20 py-2 my-2 bg-brand-500 rounded-md border-transparent 
                      flex-1 flex justify-center items-center text-sm hover:bg-brand-300 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 
                      focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors
                      disabled:opacity-50 disabled:hover:bg-brand-500"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
