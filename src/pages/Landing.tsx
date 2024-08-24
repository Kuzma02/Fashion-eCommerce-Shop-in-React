import { Banner, CategoryItem, HomeCollectionSection } from "../components";

const Landing = () => {
  return (
    <>
      <Banner />
      <HomeCollectionSection />

      <div className="max-w-screen-2xl px-5 mx-auto mt-24">
        <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">Our Categories</h2>
        <div className="flex justify-between flex-wrap gap-y-10">

        <CategoryItem categoryTitle="Special Edition" image="luxury category 1.png" />          
        <CategoryItem categoryTitle="Luxury Collection" image="luxury category 2.png" />          
        <CategoryItem categoryTitle="Summer Edition" image="luxury category 3.png" />          
        <CategoryItem categoryTitle="Unique Collection" image="luxury category 4.png" />          
        


        </div>
      </div>
    </>
  );
};
export default Landing;
