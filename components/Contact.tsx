"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Thank you! Your message has been recorded.");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            lg:rounded-[36px]
            border
            border-[#3A3A3A]
            bg-black/5
            backdrop-blur-[30px]
            shadow-[0_25px_70px_rgba(0,0,0,0.12)]
          "
        >

          {/* Glass Reflection */}
          <div
            className="
              absolute
              inset-0
              rounded-2xl
              lg:rounded-[36px]
              bg-gradient-to-br
              from-white/20
              via-transparent
              to-transparent
              pointer-events-none
            "
          />

          {/* Inner Border */}
          <div
            className="
              absolute
              inset-[1px]
              rounded-[22px]
              lg:rounded-[35px]
              border
              border-white/10
              pointer-events-none
            "
          />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-14">

            <h2
              className="
                font-extrabold
                text-[#2F2F2F]
                leading-tight
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[62px]
              "
            >
              Let's Create Something
              <br />
              Extraordinary.
            </h2>

            <p
              className="
                mt-5
                text-[#5B5B5B]
                leading-7
                text-base
                sm:text-lg
                lg:text-xl
                lg:leading-9
              "
            >
              Have a project in your mind? Whether it's branding,
              social media, UI/UX or creative design,
              I'd love to hear your ideas.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 lg:mt-14 space-y-6"
            >
            
{/* Name */}

<div className="relative">
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

  <input
    type="text"
    name="name"
    placeholder="Your Full Name"
    value={form.name}
    onChange={handleChange}
    className="
      w-full
      rounded-2xl
      bg-gradient-to-br
      from-[#2B2B2B]/95
      via-[#1A1A1A]/90
      to-[#111111]/95
      backdrop-blur-xl
      border
      border-white/10
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_10px_25px_rgba(0,0,0,0.35)]
      px-6
      py-5
      text-white
      placeholder:text-gray-400
      outline-none
      transition-all
      duration-300
      focus:border-[#2711B1]
      focus:ring-4
      focus:ring-[#2711B1]/20
    "
  />
</div>

{/* Phone */}

<div className="relative">
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    value={form.phone}
    onChange={handleChange}
    className="
      w-full
      rounded-2xl
      bg-gradient-to-br
      from-[#2B2B2B]/95
      via-[#1A1A1A]/90
      to-[#111111]/95
      backdrop-blur-xl
      border
      border-white/10
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_10px_25px_rgba(0,0,0,0.35)]
      px-6
      py-5
      text-white
      placeholder:text-gray-400
      outline-none
      transition-all
      duration-300
      focus:border-[#2711B1]
      focus:ring-4
      focus:ring-[#2711B1]/20
    "
  />
</div>

{/* Email */}

<div className="relative">
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={form.email}
    onChange={handleChange}
    className="
      w-full
      rounded-2xl
      bg-gradient-to-br
      from-[#2B2B2B]/95
      via-[#1A1A1A]/90
      to-[#111111]/95
      backdrop-blur-xl
      border
      border-white/10
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_10px_25px_rgba(0,0,0,0.35)]
      px-6
      py-5
      text-white
      placeholder:text-gray-400
      outline-none
      transition-all
      duration-300
      focus:border-[#2711B1]
      focus:ring-4
      focus:ring-[#2711B1]/20
    "
  />
</div>
{/* Message */}

<div className="relative">
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

  <textarea
    name="message"
    rows={6}
    placeholder="Tell Me about Your Project..."
    value={form.message}
    onChange={handleChange}
    className="
      w-full
      rounded-2xl
      bg-gradient-to-br
      from-[#2B2B2B]/95
      via-[#1A1A1A]/90
      to-[#111111]/95
      backdrop-blur-xl
      border
      border-white/10
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_10px_25px_rgba(0,0,0,0.35)]
      px-6
      py-5
      text-white
      placeholder:text-gray-400
      outline-none
      resize-none
      transition-all
      duration-300
      focus:border-[#2711B1]
      focus:ring-4
      focus:ring-[#2711B1]/20
    "
  />
</div>

{/* Button */}

<button
  type="submit"
  className="
    group
    relative
    w-full
    overflow-hidden
    rounded-2xl
    bg-[#2711B1]
    py-5
    text-lg
    sm:text-xl
    font-semibold
    text-white
    transition-all
    duration-500
    hover:bg-[#1F0D8D]
    hover:shadow-[0_20px_60px_rgba(39,17,177,0.45)]
    hover:scale-[1.01]
  "
>
  <span className="relative z-10 flex items-center justify-center gap-3">
    Let's Connect

    <span className="transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  </span>

  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
</button>

</form>

</div>

</div>

</div>

</section>
);
}

