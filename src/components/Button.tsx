const Button = ({ mode, text }: { mode: string; text: string }) => {
  return (
    <>
      {mode === "white" && (
        <button className="bg-white text-black text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center">
          {text}
        </button>
      )}

      {mode === "transparent" && (
        <button className="text-white border-white border-2 text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center">
          {text}
        </button>
      )}
    </>
  );
};
export default Button;
