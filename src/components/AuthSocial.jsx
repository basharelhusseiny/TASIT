const AuthSocial = () => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-center font-medium gap-1">
        <p className="text-[#2E2E34]">Don’t have an account? </p>
        <p className="text-[#A0CA18]">Sign Up</p>
      </div>
      <div className="text-[#737584] text-[13px] flex items-center justify-center gap-3 pb-6">
        <span className="w-[72px] h-[1px] bg-[#B8B9C1]"></span>
        Or Continue With
        <span className="w-[72px] h-[1px] bg-[#B8B9C1]"></span>
      </div>
      <div>
        <button className="w-full h-[52px] border-1 border-dashed border-[#A0CA18] py-3 rounded-[12px] flex gap-3 items-center justify-center">
          <img src="/images/Symbol.svg.svg" alt="" className="w-10 h-[28px]" />
          <span className="text-[#212E05] font-medium">
            Sign in with Google
          </span>
        </button>
        <button className="w-full h-[52px] border-1 border-dashed border-[#A0CA18] py-3 mt-4 rounded-[12px] flex gap-3 items-center justify-center">
          <img
            src="/images/facebook logo.svg"
            alt=""
            className="w-10 h-[28px] ml-5"
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
