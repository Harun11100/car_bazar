'use client';
import React, { Fragment, useState } from 'react';
import { Checkbox, Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';
import Image from 'next/image';

interface SearchManufacturersProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturers = ({ manufacturer, setManufacturer }: SearchManufacturersProps) => {
  const [query, setQuery] = useState('');

  // const normalizedQuery = query.toLowerCase().replace(/\s+/g, '');
  // const filteredManufacturers = normalizedQuery === ''
  //   ? manufacturerList
  //   : manufacturerList.filter(item =>
  //       item.toLowerCase().replace(/\s+/g, '').includes(normalizedQuery)
  //     );


  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );


  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
        <ComboboxButton className='absolute top-[14px]'>
         <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </ComboboxButton>
          <ComboboxInput
            className=" search-manufacturer__input "
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Lamborgini"
            displayValue={(item: string) => item}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            {/* <ComboboxOptions
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturers.length === 0 && query !== "" &&(
                filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    className="relative search-manufacturer__option text-gray-900"
                    value={item}
                  >
                    {({ selected}) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

  
                    
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions> */}


            <ComboboxOptions anchor="bottom"  className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
        {filteredManufacturers.map((item) => (
          <ComboboxOption key={item} value={item} className="relative search-manufacturer__option text-gray-900">
            {item}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturers;
