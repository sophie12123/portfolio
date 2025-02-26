"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    //form the request for sending data to the server
    const options = {
      //methon is POST:we are sending data
      method: "POST",
      //tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      //body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
      </div>
      <p className="text-[#ADB7BE] mb-4 max-w-md"> nihao</p>
      <div className="social flex flex-row gap-2">
        <link rel="stylesheet" href="github.com">
          {/* <Image src={githubIcon} alt="Github Icon" /> */}
        </link>
        <link rel="stylesheet" href="linkedin.com">
          {/* <Image src={linkedinIcon} alt="Github Icon" /> */}
        </link>
      </div>
      <div>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5

            "
              placeholder="jacob@googel.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              type
            </label>
            <input
              name="subject"
              type="subject"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="...."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text
            white font-medium py-2.5 px-5 rounded-lg"
          >
            Send Message
          </button>
        </form>
        {emailSubmitted && (
          <p className="text-green-300 text-sm mt-2">Email sent succssfully!</p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
