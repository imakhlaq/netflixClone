/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/legacy/image";

const login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent ">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt="login page"
      /> */}

      <img
        src="https://rb.gy/p2hphi"
        alt="sda"
        className="object-fill -z-20 absolute"
      />

      <img
        src="https://rb.gy/ulxxee"
        className="mt-3 ml-3 cursor-pointer object-contain md:left-10 md:top-6 md:absolute"
        width={150}
        alt="dada"
        height={150}
      />

      <form className="pt-20 px-16 pb-52 bg-black space-y-4 felx flex-col rounded-md ">
        <h1 className="text-3xl font-semibold mb-9">Sign In</h1>
        <div className="flex flex-col space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#333] py-3 px-5 text-gray-600 text-xl rounded-md  focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-[#333] py-3 px-5 text-gray-600 text-xl rounded-md cursor-pointer focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="text-md text-center bg-red-600 py-3 w-full font-semibold rounded-md !mt-10"
        >
          Sign In
        </button>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 justify-center">
            <input type="checkbox" />
            <label className="text-sm text-[#b3b3b3]">Remmber me</label>
          </div>
          <a href="dadad.dad" className="text-sm text-[#b3b3b3]">
            Need help?
          </a>
        </div>
        <div className="flex flex-col space-y-3">
          <p>
            New to Netflix? <a href="dadad.caca">Sign up now.</a>
          </p>
          <p className="max-w-sm text-sm text-[#b3b3b3]">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot. <span className="text-blue-600"> Learn more. </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
