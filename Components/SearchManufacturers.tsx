'use client';
import React, { Fragment, useState } from 'react';
import { Checkbox, Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import Image from 'next/image';
import { manufacturers as manufacturerList } from '@/constants';

interface SearchManufacturersProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturers = ({ manufacturer, setManufacturer }: SearchManufacturersProps) => {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.toLowerCase().replace(/\s+/g, '');
  const filteredManufacturers = normalizedQuery === ''
    ? manufacturerList
    : manufacturerList.filter(item =>
        item.toLowerCase().replace(/\s+/g, '').includes(normalizedQuery)
      );

  return (
    <div className="search-manufacturers">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[20px]">
            <Image src="/car-logo.svg" alt="car-logo" width={20} height={20} className='' />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturers__input"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Lamborgini"
            displayValue={(manufacturer: string) => manufacturer}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <ComboboxOption value={query} className="search-manufacturer_option">
                
                </ComboboxOption>
              ) : (
                filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    className="search-manufacturer_option"
                  >
                    {({ active, selected }) => (
              <ul
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {selected && <Checkbox/>}
                {item}
              </ul>
            )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturers;
