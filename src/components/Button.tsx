const Button = ({ mode, text }: { mode: string; text: string }) => {
  return (
    <>
      {mode === "white" && (
        <button className="bg-white text-black text-center text-xl border border-[rgba(0, 0, 0, 0.40)] font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base">
          {text}
        </button>
      )}

        {mode === "brown" && (
        <button className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base">
          {text}
        </button>
      )}

      {mode === "transparent" && (
        <button className="text-white border-white border-2 text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base">
          {text}
        </button>
      )}

    {mode !== "white" && mode !== "brown" && mode !== "transparent" && (
        <p>No valid mode selected</p>
      )}
    </>
  );
};
export default Button;
