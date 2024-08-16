import { InputTest } from "./components/atoms/Input";
import { ButtonTesting } from "./components/atoms/Button";
import Login from "./components/molecules/Login";
import Login_V2 from "./components/molecules/Login-v2";

export default function Home() {
  return (
    <>
      <div className="bg-slate-400 w-full h-screen">
        <h1 className="font-bold text-5xl">Main, page</h1>
        {/* <ButtonTest />
        <ButtonTest2/> */}
        {/* <InputTest/>
        <ButtonTesting/> */}
        {/* <Login/> */}
        <Login_V2/>
      </div>
    </>
  );
}
