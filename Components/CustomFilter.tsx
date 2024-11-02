'use client';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';

interface OptionProps {
  title: string;
  value: string;
}

interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState<OptionProps>(options[0]);

  const handleUpdateParams = (option: OptionProps) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(title.toLowerCase(), option.value); // Using title as the query parameter key

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(option) => {
          setSelected(option);
          handleUpdateParams(option);
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                  value={option}
                  key={option.title}
                  className="relative cursor-default select-none py-2 px-4"
                >
                  <span>{option.title}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
