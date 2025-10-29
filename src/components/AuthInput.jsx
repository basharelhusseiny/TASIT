import { useState } from "react";

const AuthInput = ({ type, placeholder, icon, label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative flex flex-col gap-1">
      {label && (
        <label className="text-[#5D5E6C] font-medium text-[15px]">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={showPassword && type === "password" ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-11 lg:h-[56px] rounded-lg bg-[#F7F7F8] pl-11 pr-11 outline-none 
          placeholder:font-medium placeholder:text-[#B8B9C1] text-[#2E2E34] font-medium"
        />

        {/* Icon on the left */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
          {icon}
        </span>

        {/* Eye icon for password toggle */}
        {type === "password" && (
          <img
            src={
              showPassword
                ? "/images/Eye Password Hide.svg"
                : "/images/Eye Password.svg"
            }
            alt="toggle password visibility"
            onClick={togglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer select-none"
          />
        )}
      </div>
    </div>
  );
};

export default AuthInput;
