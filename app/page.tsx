
import { Hero, SearchCar, CarCard, NoMoreCars, ShowMore } from '@/components'
import { fetchCars } from '@/utils/apiUtils'
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {

  const manufacturer = searchParams.manufacturer;
  const model = searchParams.model;
  const limit = searchParams.limit;

  const allCars = await fetchCars({

    manufacturer: manufacturer || "",
    model: model || "",
    limit: limit || 10,

  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const isNext = (searchParams.limit || 10) > allCars.length;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <Hero />

      <div className='mt-12 sm:px-16 px-6 py-4 max-width' id='catalogue'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>
            Explore the cars
          </p>
        </div>
        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchCar 
          
          
          />
        </div>

        {!isDataEmpty ? (
          <section id='Cars'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-8 pt-14'>
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
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black text-xl font-bold'>
              No cars were found :c
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
