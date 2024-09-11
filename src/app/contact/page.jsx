"use client";
import { TextareaAutosize } from "@mui/base";
import { Button, TextField } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div class="w-full min-h-[100vh] bg-white flex justify-center items-center">
      <div>
        <div className="mt-12">
          <h2 className="text-center text-[4rem] p-3 pt-0 font-extrabold font-sans">
            Talk to us!
          </h2>
          <p className="-mt-4 text-xl font-[400] text-gray-400 text-center">
            Drop us a line and someone from our
            <span className=" italic  font-sans text-orange-500 font-extrabold transition-colors ease-in-out cursor-pointer">
              {" "}
              friendly team{" "}
            </span>
            will get back to you soon.
          </p>
        </div>

        {/* form section */}
        <div className="mt-8 w-[100%] mb-7 pt-10 pb-10 rounded-md shadow-md">
          <form className="flex flex-col gap-6 justify-center items-center w-full">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="w-[90%]"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-[90%]"
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              className="w-[90%]"
            />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={10}
              className="w-[90%] p-2 border border-gray-400 rounded-md outline-none "
              placeholder="Enter your message here ..."
            />
            <Button
  variant="contained"
  className="text-white w-[90%] h-14 hover:w-[96%] transition-all duration-200 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-400 font-sans text-xl"
>
  Send Message
</Button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
