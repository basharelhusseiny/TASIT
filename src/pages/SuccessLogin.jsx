const SuccessLogin = () => {
  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-l from-[#1C534A] to-[#002F31] text-white flex flex-col justify-between items-center overflow-hidden">
      {/* الخلفيات */}
      <img
        src="/images/Background (1).svg"
        alt=""
        className="absolute top-0 left-0 opacity-90 pointer-events-none select-none"
      />
      <img
        src="/images/Background (1).svg"
        alt=""
        className="absolute top-0 right-0 opacity-90 pointer-events-none select-none"
      />

      <div className="flex-1 flex flex-col justify-center items-center px-5">
        <div className="w-[320px] sm:w-[496px]  flex flex-col items-center">
          <img
            src="/images/Right Mark Illustration.png"
            className="w-[172px] h-[172px] mb-[48px]"
            alt=""
          />
          <div className="text-center w-[450px] max-w-full">
            <p className="text-[#D8F274] text-[33px] font-bold mb-2">
              You're In!
            </p>
            <p className="text-[26px] leading-10 font-normal">
              It's great to see you again. Enjoy your stay and pick up right
              where you left off.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-[52px] text-[13px] text-center z-10">
        <div className="flex flex-col items-center">
          <img
            src="/images/Spinner-Dots-5.svg"
            className="mb-1"
            alt=""
          />
          <p>You will be moved to home screen right now.</p>
          <p>Enjoy the features!</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessLogin;
