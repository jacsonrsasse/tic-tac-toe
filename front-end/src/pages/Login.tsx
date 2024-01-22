import { LoginSection } from "../components/LoginSection";

export function Login() {
  return (
    <main className="h-screen w-screen bg-primary flex justify-center items-center">
      <div
        className="
          w-[350px] h-5/6 bg-secondary rounded-3xl flex flex-col gap-4 overflow-hidden transition-all ease-in-out delay-0 
          md:w-[650px] md:grid md:gap-0 md:grid-cols-2 md:grid-rows-[1fr_50px_200px]
          lg:w-[950px] 
          xl:w-[1050px]"
      >
        <LoginSection aditionalClassName="md:order-1">
          <img src="/title.png" alt="" className="w-[70%] md:w-[80%]" />
        </LoginSection>

        <LoginSection aditionalClassName="md:order-3 md:col-span-2">
          <hr className="w-[80%] h-[3px] bg-tertiary border-none" />
        </LoginSection>

        <LoginSection aditionalClassName="md:order-2 ">
          <img src="/tic-tac-toe.png" alt="" className="w-[95%]" />
        </LoginSection>

        <LoginSection aditionalClassName="gap-4 md:order-4 md:col-span-2">
          <input
            type="text"
            className="w-[300px] h-12 outline-none p-5 text-xl rounded-3xl"
          />
          <button className="w-[140px] h-12 outline-none bg-black text-white text-xl rounded-3xl hover:bg-red-600">
            Login
          </button>
        </LoginSection>
      </div>
    </main>
  );
}
