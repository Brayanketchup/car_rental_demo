'use client'
import { Hero, SearchCar, CarCard, NoMoreCars, ShowMore, NoCarsFound } from '@/components'
import { fetchCars } from '@/utils/apiUtils'
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  
  console.log('RAPIDAPI_KEY:', process.env.NEXT_PUBLIC_RAPIDAPI_KEY);
  console.log('RAPIDAPI_HOST:', process.env.NEXT_PUBLIC_RAPIDAPI_HOST);

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    model: searchParams.model,
    limit: searchParams.limit || 10,

  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const isNext = (searchParams.limit || 10) > allCars.length;

  return (
    <>


      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
        <div className='p-24'>
          <Hero />
          <section className='mt-12 py-4 w-full' id='catalogue'>
            <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
              <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
            </div>
            <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
              <SearchCar />
            </div>
            {!isDataEmpty ? (
              <section id='Cars'>
                <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-8 pt-14'>
                  {allCars?.map((car) => (
                    <CarCard car={car} />
                  )
                  )}
                </div>
                {isNext ? (
                  <NoMoreCars />
                ) : (<ShowMore
                  pageNumber={(searchParams.limit || 10) / 10}
                  isNext={isNext}
                />)}
              </section>
            ) : (
              <NoCarsFound
                manufacturer={searchParams.manufacturer}
                model={searchParams.model}
              />
            )}
          </section>
        </div>
        <div className='w-full h-auto py-16 flex flex-col text-center text-white bg-[#2d2d2d] '>
          <h1 className=' font-extrabold 2xl:text-[52px] sm:text-[44px] text-[40px] '>Save big with our cheap car rental!!</h1>
          <p className='text-[27px]'>Top Airports. Local Suppliers. <span className="text-primary-color">24/7</span> Support.</p>
        </div>
        
      </main>


    </>
  );
}
