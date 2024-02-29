
import { Hero, CustomFilter, SearchBar, CarCard, NoMoreCars } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

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
          <SearchBar />

          <div className='flex justify-start flex-wrap items-center gap-2'>
            {/* <CustomFilter title="fuel" /> */}
            {/* <CustomFilter title="year" /> */}
          </div>
        </div>

        {!isDataEmpty ? (
          <section id='Cars'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-8 pt-14'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              )
              )}
            </div>
            <NoMoreCars/>
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
