
import { Hero, SearchCar, CarCard, NoMoreCars, ShowMore, NoCarsFound } from '@/components'
import { fetchCars } from '@/utils/apiUtils'
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    model: searchParams.model,
    limit: searchParams.limit || 10,

  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const isNext = (searchParams.limit || 10) > allCars.length;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <Hero />

      <div className='mt-12 py-4 w-full' id='catalogue'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>
            Explore the cars
          </p>
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
          manufacturer= {searchParams.manufacturer}
          model={searchParams.model}
          />
        )}
      </div>
    </main>
  );
}
