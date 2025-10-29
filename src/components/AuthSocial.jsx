const AuthSocial = () => {
  return (
    <div className="mt-4">
      <div className="py-6 flex items-center justify-center font-medium gap-1">
        <p className="text-[#2E2E34]">Don’t have an account? </p>
        <p className="text-[#A0CA18]">Sign Up</p>
      </div>
      <div className="text-[#737584] text-[13px] flex items-center justify-center gap-3 pb-6">
        <span className="w-[72px] h-[1px] bg-[#B8B9C1]"></span>
        Or Continue With
        <span className="w-[72px] h-[1px] bg-[#B8B9C1]"></span>
      </div>
      <div>
        <button className="w-full border-1 border-dashed border-[#A0CA18] py-3 rounded-[12px] flex items-center justify-center">
          <img
            src="/images/Social Media Logos.svg"
            alt=""
            className="flex items-center justify-center"
          />
          <span className="text-[#212E05] font-medium">
            Sign in with Google
          </span>
        </button>
        <button className="w-full border-1 border-dashed border-[#A0CA18] py-3 mt-4 rounded-[12px] flex items-center justify-center">
          <img
            src="/images/Social Media Logos (1).svg"
            alt=""
            className="flex items-center justify-center"
          />
          <span className="text-[#212E05] font-medium">
            Sign in with Facebook
          </span>
        </button>
      </div>
    </div>
  );
};

export default AuthSocial;
