"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ModelViewer from "../components/ModelViewer";
import BeagleViewer from "@/components/BeagleViewer";
import confetti from "canvas-confetti"; // Import the confetti library
import { RefObject } from 'react';

export default function Component() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Refs for each section
  const featuresRef = useRef(null);
  // const resourcesRef = useRef(null);
  const feedbackRef = useRef(null);
  // const kickstartRef = useRef(null);

  // Function to scroll to a ref
  const scrollToRef = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Function to trigger the confetti effect
  const triggerConfetti = () => {
    confetti({
      particleCount: 400,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative w-full z-20" style={{ height: "50vh" }}>
        {mounted && (
          <div className="absolute inset-0 overflow-hidden -mt-[200px] md:-mt-10 ">
            <Image
              src="/assets/Vector.png"
              alt="Header background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        )}
        <div className="container mx-auto px-4 md:py-4 flex justify-between items-center relative z-10">
          <div className="flex items-center ">
            <div className="mt-4">
              <Image
                src="/assets/logo.png"
                alt="PetReady logo"
                width={62}
                height={62}
                className="mx-auto w-10 h-10 md:w-[62px] md:h-[62px] md:mx-0"
              />
            </div>
            <span className="text-white text-2xl md:text-3xl font-bold mt-6">
              PetReady
            </span>
          </div>
          {/* <select className="bg-transparent text-white border-none mt-6 text-base font-semibold">
            <option className="bg-transparent text-slate-950">
              SWITCH MODE: PARENTS
            </option>
            <option className="bg-transparent text-slate-950">
              SWITCH MODE: KIDS
            </option>
          </select> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto -mt-44 px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-2 bg-white md:px-7 md:mr-28 -mt-[130px] md:-mt-[200px] z-20">
            {mounted && <ModelViewer />}
          </div>

          <div className="md:-mx-10">
            <h1
              className="text-3xl md:text-6xl font-bold mb-12"
              style={{ color: "#33CCFF" }}
            >
              Teaching Responsibility in Pet Ownership
            </h1>
            <div className="flex justify-start gap-4">
              {/* <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-3xl shadow-md flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 mr-2"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">
                    Coming soon on the
                  </span>
                  <span className="text-lg font-bold">App Store</span>
                </div>
              </button> */}
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-3xl shadow-md flex items-center"
                onClick={() => {
                  window.location.href =
                    "https://play.google.com/store/apps/details?id=com.anonymous.petready&hl=en_US"
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 mr-2"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">Available on</span>
                  <span className="text-lg font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Navigation Bar */}
        {/* Hidden in mobile */}
        <div className="hidden md:flex justify-center p-4 bg-white">
          <button
            onClick={() => scrollToRef(featuresRef)}
            className="bg-custom-light-blue text-gray-600 font-semibold mx-14 px-10 py-5 text-md rounded-3xl flex items-center hover:bg-custom-hover-blue transition-colors duration-200"
          >
            Our Features
          </button>
          {/* <button
            onClick={() => scrollToRef(resourcesRef)}
            className="bg-custom-light-blue text-gray-600 font-semibold mx-14 px-10 py-5 text-md rounded-3xl flex items-center hover:bg-custom-hover-blue transition-colors duration-200"
          >
            Our Resources
          </button> */}
          <button
            onClick={() => scrollToRef(feedbackRef)}
            className="bg-custom-light-blue text-gray-600 font-semibold mx-14 px-10 py-5 text-md rounded-3xl flex items-center hover:bg-custom-hover-blue transition-colors duration-200"
          >
            Our Feedback
          </button>
          <button
            onClick={() => {
              triggerConfetti() // Trigger confetti effect when clicked
              setTimeout(() => {
                // Redirect to the Kickstarter page after the animation
                window.location.href =
                  "https://www.kickstarter.com/projects/petready/petready-teaching-responsibility-through-pet-ownership?ref=project_build"
              }, 500)
            }}
            className="bg-gradient-to-r from-[#AA7AE7] via-[#58CDFF] to-[#FFD6F1] bg-[length:200%_200%] text-white font-bold mx-14 px-10 py-5 text-md rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-2xl animate-combinedEffect"
          >
            Kickstart Us
          </button>
        </div>

        <hr className="my-4 border-t-4 border-gray-300 w-11/12 mx-auto" />
        {/* Features Section */}
        <div ref={featuresRef} className="mb-16 mt-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl w-full">
            {/* Image on the left */}
            <div className="md:col-span-1 order-2 md:order-1 flex justify-center">
              <Image
                src="/assets/1.png"
                width={500} // Increase width
                height={300} // Increase height
                alt="Family dashboard illustration"
                className="mt-4 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-3/4 md:w-auto"
              />
            </div>

            {/* Text on the right */}
            <div className="md:col-span-2 order-1 md:order-2 text-center md:text-left md:ml-24">
              <h2 className="text-3xl md:text-6xl font-bold text-gray-600 mb-9 font-feather-bold ">
                Personalized pet profiles
              </h2>
              <p className="text-xl font-semibold text-gray-500">
                Get personalized experiences by selecting your pet's breed, age,
                and special needs. Our app creates a personalized care plan just
                for you.
              </p>
            </div>
          </div>
        </div>
        {/* Responsibility Section */}
        <div className="mb-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl w-full">
            {/* Text on the left */}
            <div className="md:col-span-2 md:text-left text-center md:mr-24">
              <h2 className="text-3xl md:text-6xl font-bold text-gray-600 mb-9 font-feather-bold ">
                Responsibility made fun
              </h2>
              <p className="text-xl font-semibold text-gray-500">
                Through interactive games and activities, children learn the
                responsibilities of pet ownership while having fun.
              </p>
            </div>

            {/* Image on the right */}
            <div className="md:col-span-1 flex justify-center">
              <Image
                src="/assets/2.png"
                width={500} // Increase width
                height={300} // Increase height
                alt="Family dashboard illustration"
                className="mt-4 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-3/4 md:w-auto"
              />
            </div>
          </div>
        </div>
        {/* Family Dashboard Section */}
        <div className="mb-16 mt-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl w-full">
            {/* Image on the left */}
            <div className="md:col-span-1 order-2 md:order-1 flex justify-center">
              <Image
                src="/assets/3.png"
                width={500} // Increase width
                height={300} // Increase height
                alt="Family dashboard illustration"
                className="mt-4 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-3/4 md:w-auto"
              />
            </div>

            {/* Text on the right */}
            <div className="md:col-span-2 order-1 md:order-2 text-center md:text-left md:ml-24">
              <h2 className="text-3xl md:text-6xl font-bold text-gray-600 mb-9 font-feather-bold ">
                Family Dashboard
              </h2>
              <p className="text-xl font-semibold text-gray-500">
                Track progress across family members and collaborate on pet care
                tasks with our intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section ref={feedbackRef} className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-2 md:px-4">
          <div className="rounded-lg p-5 md:p-20 shadow-md max-w-6xl mx-auto bg-white">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center text-gray-800">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  role: "Professor at Georgia Tech, Mother of an 11-year-old",
                  quote: (
                    <>
                      <strong>PetReady</strong> is exactly what we've been
                      looking for! My daughter is caring for a bearded dragon,
                      and it's been challenging to get her to stick to the daily
                      feeding routine—especially since handling worms can be
                      icky and time-consuming. An app that{" "}
                      <strong>realistically simulates pet care</strong> and acts
                      as a habit changer, I'd happily share it with other moms
                      in my Facebook groups. A one-time fee sounds perfect!
                    </>
                  ),
                  emoji: "🦎", // Bearded dragon emoji
                },
                {
                  role: "Parents of Kids Aged 12-14",
                  quote: (
                    <>
                      Our kids have been asking for a pet, but we're concerned
                      about the time and financial commitments. We love the idea
                      of letting them practice the{" "}
                      <strong>real responsibilities</strong> involved. Features
                      like notifications for tasks and informational cards
                      explaining 'why' each task is important would be great.
                      We'd also love to see options to understand that different
                      breeds have different needs and personalities.
                    </>
                  ),
                  emoji: "🐶", // Dog emoji
                },
                {
                  role: "Parents of a 15 and 9-year-old",
                  quote: (
                    <>
                      Getting a pet is like adding a{" "}
                      <strong>new family member</strong>—it's a huge commitment.
                      Our kids want one, but we're not sure they're ready for
                      the responsibility. If there's a way to test their
                      readiness and see a <strong>report card</strong> on their
                      readiness, we'd definitely consider using it. Anything
                      that helps build consistency in habits is a plus!
                    </>
                  ),
                  emoji: "🐕", // Dog emoji
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl shadow-md p-6"
                >
                  {/* Emoji above the quote */}
                  <div className="text-5xl text-center mb-4">
                    {testimonial.emoji}
                  </div>
                  {/* Stars */}
                  <div className="text-center text-yellow-500 mb-4 text-xl">
                    ★★★★★
                  </div>
                  <p className="mb-4 text-gray-700 text-lg">
                    {testimonial.quote}
                  </p>
                  <p className="font-bold text-gray-800">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer
        className="relative w-full z-20 bg-gray-100"
        style={{ height: "40vh" }}
      >
        {mounted && (
          <div className="absolute inset-0 overflow-hidden z-0">
            <Image
              src="/assets/Vector_2.png"
              alt="Footer background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className="transform -scale-x-100"
            />
          </div>
        )}
        <div className="container mx-auto px-4 text-center text-white relative z-10 flex flex-col justify-end items-center h-full">
          <div className="pb-4 w-full text-center">
            <Image
              src="/assets/logo.png"
              alt="PetReady logo"
              width={120}
              height={120}
              className="mx-auto w-14 h-14  md:w-24 md:h-24"
            />
            <p className="text-xl md:text-3xl font-bold mb-1 text-black">
              PetReady
            </p>
            <p className="mb-1 md:text-xl font-normal text-black">CONTACT US</p>
            <p className="mb-6 md:text-xl font-bold text-black">
              support@petready.app
            </p>
            <div className="flex justify-center gap-10 md:gap-24 mb-4">
              <button className="text-slate-600 md:text-xl font-semibold">
                APP
              </button>
              <button className="text-slate-600 md:text-xl font-semibold">
                FOLLOW US
              </button>
              <button className="text-slate-600 md:text-xl font-semibold">
                TEAM
              </button>
              <button className="text-slate-600 md:text-xl font-semibold">
                PRIVACY
              </button>
            </div>
            <p>&copy; 2024 PetReady Inc. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
