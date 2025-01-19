"use client";
import {signIn} from "next-auth/react";
import Link from "next/link";
import React from "react";

const Login = () => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Now you can safely access the form fields
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("Invalid email or password");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-sm md:min-w-[440px] w-full">
          <h1 className="text-center font-bold text-xl mb-6">Sign in With Email</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id="email"
              className="px-3 py-2 rounded-sm border focus:outline-none w-full"
            />
            <input
              placeholder="Enter Your Password"
              type="password"
              name="password"
              id="password"
              className="px-3 py-2 rounded-sm border focus:outline-none w-full"
            />
            <button
              type="submit"
              color="primary"
              className="bg-[#3d9469] text-white py-3 rounded-sm"
            >
              Sign In
            </button>
          </form>
          <div className="flex flex-col items-center mt-4 gap-2">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-sm w-full"
              onClick={() => signIn("google")}
            >
              Sign in with Google
            </button>
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded-sm w-full"
              onClick={() => signIn("github")}
            >
              Sign in with GitHub
            </button>
          </div>
          <div className="flex justify-between">
            <Link href={`/signUp`}>
              <button className="font-normal text-sm text-blue-700">
                new user? <span className="text-[16px] font-bold">Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
