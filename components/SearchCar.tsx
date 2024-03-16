"use client";

import React from 'react'
import { useState } from 'react';
import { manufacturersData } from '@/constants';
import { useRouter } from "next/navigation";

export const SearchCar = () => {

    const router = useRouter();
    // const { manufacturer, model } = filters;

    const [models, setModels] = useState<string[]>([]);
    const [selectedManufacturer, setSelectedManufacturer] = useState('');
    const [selectedModel, setSelectedModel] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (selectedManufacturer === "" || selectedModel === "") {
            return alert("Please select a Manufacturer and model");
        }
        updateSearchParams(selectedManufacturer, selectedModel);
        setSelectedModel("");
        setSelectedManufacturer("");
    };
    const updateSearchParams = (manufacturer: string, model: string) => {

        const searchParams = new URLSearchParams(window.location.search);

        searchParams.set("model", model);
        searchParams.set("manufacturer", manufacturer);
        searchParams.set("limit", '10');

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname, { scroll: false });
    };
    const handleManufacturerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedManufacturer(selectedValue);
        if (selectedValue === "") {
            return setModels([])
        } else {
            setModels(manufacturersData[selectedValue])
        }

    }
    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        return setSelectedModel(event.target.value)

    }




    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex gap-7 items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'>
            {/* Manufacturer Select Input */}
            <div className="mb-4 w-auto ">
                <label htmlFor="first-select" className="block text-sm font-medium  text-gray-700">Select Manufature</label>
                <select
                    id="manufacturer-select"
                    name="manufacturer-select"
                    value={selectedManufacturer}
                    onChange={(e) => handleManufacturerChange(e)}
                    className="mt-1 bg-primary-color-100 block w-auto pl-3 pr-10 py-2  border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-xs sm:text-base rounded-md"
                >
                    <option value="">Select a manufature</option>
                    {Object.keys(manufacturersData).map(manufacturer => (
                        <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
                    ))}


                </select>
            </div>

            {/* Model Select Input */}

            <div className="mb-4 w-auto ">
                <label htmlFor="first-select" className="block text-sm font-medium  text-gray-700">Select Model</label>
                <select
                    id="model-select"
                    name="model-select"
                    value={selectedModel}
                    onChange={(e) => handleModelChange(e)}
                    disabled={!selectedManufacturer || selectedManufacturer === ''}
                    className="mt-1 bg-primary-color-100 block w-auto pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-xs sm:text-base rounded-md"
                >
                    <option value="">Select a model</option>
                    {models.map(model => (
                        <option key={model} value={model}>{model}</option>
                    ))}

                </select>
            </div>

            <button
                type="submit"
                className=" px-4 py-3 flex justify-center  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
                Submit
            </button>
        </form>
    );
}
