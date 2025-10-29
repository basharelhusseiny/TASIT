import AuthSocial from "../components/AuthSocial";
import Form from "../components/Form";
import Header from "../components/Header";
import WelcomeLetter from "../components/WelcomeLetter";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* المحتوى */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-[496px] w-full flex flex-col justify-center px-5 py-10">
          <Header />
          <WelcomeLetter />
          <Form />
          <AuthSocial />
        </div>
      </div>

      {/* الصورة */}
      <div className="hidden lg:flex items-center justify-center flex-1 min-h-screen p-6">
        <img
          src="/images/Log In Illustrations.png"
          alt="Login Illustration"
          className="h-full w-auto object-contain rounded-l-[40px]"
        />
      </div>
    </div>
  );
};

export default Login;
