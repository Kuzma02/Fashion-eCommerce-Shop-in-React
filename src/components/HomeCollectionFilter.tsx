const HomeCollectionFilter = () => {
  return (
    <div className="max-w-screen-2xl flex items-center justify-between mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px]">Our Collection</h2>
      <ul className="flex gap-8 items-center text-black text-2xl tracking-[0.72px]">
        <li className="text-black cursor-pointer">All</li>
        <li className="text-secondaryBrown cursor-pointer">Tops</li>
        <li className="text-secondaryBrown cursor-pointer">Dresses</li>
        <li className="text-secondaryBrown cursor-pointer">Shorts</li>
        <li className="text-secondaryBrown cursor-pointer">Jeans</li>
      </ul>
    </div>
  );
};
export default HomeCollectionFilter;
