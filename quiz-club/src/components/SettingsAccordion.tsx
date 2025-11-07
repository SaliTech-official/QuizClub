import { Disclosure, Transition } from '@headlessui/react';
import React from 'react';

const ChevronIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

type Props = {
  title: string;
  selectedValue: string;
  children: (props: { close: () => void }) => React.ReactNode;
};

const SettingsAccordion: React.FC<Props> = ({ title, selectedValue, children }) => {
  return (
    <Disclosure as="div" className="w-full mb-4">
      {({ open, close }) => (
        <div className="rounded-lg shadow-md overflow-hidden">
          <Disclosure.Button className="flex w-full justify-between items-center bg-white px-4 py-3 text-left text-lg font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <span>{title}: <span className="font-bold text-blue-600">{selectedValue}</span></span>
            <ChevronIcon
              className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </Disclosure.Button>
          
          <Transition
            enter="transition-[max-height] duration-500 ease-in-out"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-screen opacity-100"
            leave="transition-[max-height] duration-300 ease-in-out"
            leaveFrom="max-h-screen opacity-100"
            leaveTo="max-h-0 opacity-0"
          >
            <Disclosure.Panel static className="px-2 pt-2 pb-2 text-md text-gray-700 bg-white overflow-hidden">
              <div className="flex flex-col space-y-1">
                {children({ close })}
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default SettingsAccordion;