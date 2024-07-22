import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import Button from "./Button";

const ShowingPagination = () => {
  return (
    <div className="px-5 max-[400px]:px-3 mt-12 mb-24">
      <div className="flex flex-col gap-6 justify-center items-center w-1/2 mx-auto max-sm:w-3/4 max-sm:gap-5">
        <p className="text-xl max-sm:text-lg">Showing 9 of 76</p>
        <Button text="View More" mode="white" />
        <p className="flex justify-center items-center text-xl gap-2 max-sm:text-lg">
          Back to Top <HiChevronUp />
        </p>
      </div>
    </div>
  );
};
export default ShowingPagination;
