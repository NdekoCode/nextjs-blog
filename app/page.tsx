import Newsletter from '@/components/pages/home/Newsletter';

export default function Home() {
  return (
    <section className="">
      <div className="container mt-10 bg-hero bg-cover bg-center bg-no-repeat rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8">
        <div className="backdrop-blur max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-secondary/40 p-4 rounded-lg flex flex-col gap-y-5">
       <Newsletter/>   
        </div>
      </div>
    </section>
  );
}
