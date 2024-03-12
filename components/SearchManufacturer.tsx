"use client";

import { SearchManufacturerProps } from '@/types'
import React from 'react'
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment, useEffect } from 'react';
import { manufacturers } from '@/constants';

export const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {

    const [query, setQuery] = useState('');
    const [selectedManufacturer, setSelectedManufacturer] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    useEffect(() => {
        setFilteredOptions(
            manufacturers.filter(manufacturer =>
                manufacturer.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, manufacturer]);

    return (

        <div className="flex-1 max-sm:w-full flex justify-start items-center">
            <div className='relative w-full'>
                <div className="absolute top-[14px]">
                    <img
                        src="/car-logo.png"
                        width={20}
                        height={20}
                        className='ml-4'
                        alt="car logo"
                    />
                </div>
                <input
                    className='w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm'
                    type='text'
                    placeholder={selectedManufacturer || 'Select a manufacturer'}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowOptions(true);
                    }}
                    onFocus={() => setShowOptions(true)}
                    onBlur={() => {
                        setTimeout(() => { // Delay to allow click event to process
                            setShowOptions(false);
                            setQuery("");
                        }, 100);
                    }}
                />
                {showOptions && (
                    <ul className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {filteredOptions.map((item) => (
                            <li
                                key={item}
                                className={`cursor-default select-none py-2 pl-10 pr-4 ${item === selectedManufacturer ? 'bg-primary-color text-white' : 'text-gray-900'} hover:bg-primary-color hover:text-white`}
                                onClick={() => {
                                    setSelectedManufacturer(item);
                                    setShowOptions(false);
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};



