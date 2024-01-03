"use client";
import axios from "../api/axios";
import { useState } from "react";

const Page: React.FC = () => {
  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/users/signup",
        {
          name: name,
          password: password,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center bg-[#121212] p-7 max-w-md flex-col gap-4 rounded-lg">
        <p className="text-2xl font-medium">SIGN IN</p>
        <form onSubmit={handleSubmit}>
          <p className="text-lg mb-2">Email</p>
          <input
            className="rounded-md bg-[#333] p-2 outline-none w-full mb-3"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="text-lg mb-2">Name</p>
          <input
            className="rounded-md bg-[#333] p-2 outline-none w-full mb-3"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p className="text-lg mb-2">Password</p>
          <input
            className="rounded-md bg-[#333] p-2 outline-none w-full mb-5"
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <button className="bg-[#333] w-full rounded-lg p-2 hover:bg-white hover:text-[#121212] transition-colors">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
export default Page;
