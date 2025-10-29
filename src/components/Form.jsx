import { useState } from "react";
import { useNavigate } from "react-router";
import AuthInput from "./AuthInput";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) return;

    navigate("/successfulLogin");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-6">
        <AuthInput
          type="email"
          placeholder="email@address.com"
          icon={<img src="/images/email.svg" alt="email" />}
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          type="password"
          placeholder="Password"
          icon={<img src="/images/password.svg" alt="password" />}
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center gap-2 mt-3">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              id="remember"
              type="checkbox"
              className="appearance-none w-4 h-4 mb-0.5 border-2 border-gray-400 rounded-sm cursor-pointer
      checked:bg-[#BFE437] checked:border-[#BFE437]
      checked:before:content-['✓'] checked:before:text-black checked:before:text-sm
      checked:before:flex checked:before:items-center checked:before:justify-center"
            />
            <span className="font-medium text-[#2E2E34]">Remember Me</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#BFE437] hover:bg-[#afd230] text-[#212E05] mt-6 flex items-center justify-center w-full py-4 rounded-[12px] font-bold cursor-pointer duration-200"
        >
          Sign In
        </button>
      </form>

      <p className="text-end text-[#002F31] font-medium mt-2 cursor-pointer">
        Forget Password?
      </p>
    </>
  );
};

export default Form;
