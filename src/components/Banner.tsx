import Button from "./Button"

const Banner = () => {
  return (
    <div className="banner w-full flex flex-col justify-end items-center">
      <h2 className="text-white text-center text-6xl font-bold tracking-[1.86px] leading-[60px]">Discover the Best <br /> 
      Fashion Collection</h2>
      <h3 className="text-white text-3xl font-normal leading-[72px] tracking-[0.9px]">The High-Quality Collection</h3>
      <div className="flex justify-center items-center gap-3 pb-10">
        <Button />
        <Button />
      </div>
    </div>
  )
}
export default Banner