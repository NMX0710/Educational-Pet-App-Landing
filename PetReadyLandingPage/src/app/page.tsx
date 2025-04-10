"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ModelViewer from "../components/ModelViewer";
import BeagleViewer from "@/components/BeagleViewer";
import confetti from "canvas-confetti"; // Import the confetti library
import { RefObject } from 'react';

export default function Component() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Refs for each section
  const featuresRef = useRef(null);
  const feedbackRef = useRef(null);

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
      {/* Hero Section */}
      <header className="relative w-full z-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/logo.png"
                alt="PetReady logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold text-white">PetReady</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToRef(featuresRef)} className="text-white hover:text-blue-200 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToRef(feedbackRef)} className="text-white hover:text-blue-200 transition-colors">
                Feedback
              </button>
              <button
                onClick={() => {
                  triggerConfetti();
                  setTimeout(() => {
                    window.location.href = "https://www.kickstarter.com/projects/petready/petready-teaching-responsibility-through-pet-ownership?ref=project_build";
                  }, 500);
                }}
                className="bg-white text-blue-900 px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Support Us
              </button>
            </div>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Teaching Responsibility Through <span className="text-blue-200">Pet Ownership</span>
              </h1>
              <p className="text-xl text-gray-200">
                An interactive app that makes learning about pet care fun and engaging for the whole family.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.anonymous.petready&hl=en_US"}
                  className="bg-white text-blue-900 px-6 py-3 rounded-full flex items-center space-x-2 transition-colors hover:bg-gray-100"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Get it on Google Play</span>
                </button>
              </div>
            </div>
            <div className="relative h-[400px]">
              {mounted && <ModelViewer />}
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Everything you need for your pet's wellbeing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PetReady gives you the tools to manage your pet's health and daily needs while teaching responsibility to your children.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Image src="/assets/1.png" width={60} height={60} alt="Profile icon" className="hover:scale-125 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pet Profiles</h3>
              <p className="text-gray-600">
                Create detailed profiles for each of your pets with breed, age, allergies, and more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Image src="/assets/2.png" width={60} height={60} alt="Game icon" className="hover:scale-125 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Daily Care Checklists</h3>
              <p className="text-gray-600">
                Keep track of feeding, walks, medication, and other daily care tasks with interactive checklists.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Image src="/assets/3.png" width={60} height={60} alt="Dashboard icon" className="hover:scale-125 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Family Dashboard</h3>
              <p className="text-gray-600">
                Track progress and coordinate pet care tasks with our intuitive family dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Reminders</h3>
              <p className="text-gray-600">
                Never miss a vet appointment, vaccination, or medication with customized reminders.
              </p>
              <span className="inline-block mt-4 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Coming Soon</span>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Health Records</h3>
              <p className="text-gray-600">
                Store and access your pet's medical history, vaccinations, and medications anytime.
              </p>
              <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Coming Soon</span>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Symptom Tracking</h3>
              <p className="text-gray-600">
                Record symptoms and health issues to share with your veterinarian.
              </p>
              <span className="inline-block mt-4 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Development Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
              
              {/* Roadmap Items */}
              <div className="space-y-24">
                <div className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg ml-12 mr-12">
                    <h3 className="text-2xl font-bold text-gray-800">Phase 1: Core Features</h3>
                    <p className="text-gray-600 mt-4">Launching with essential features including:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>Interactive pet profiles with breed-specific information</li>
                      <li>Daily care checklists with customizable tasks</li>
                      <li>Family dashboard for task coordination</li>
                      <li>Basic pet care education modules</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">Q1 2024</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg ml-12 mr-12">
                    <h3 className="text-2xl font-bold text-gray-800">Phase 2: Health Features</h3>
                    <p className="text-gray-600 mt-4">Expanding to comprehensive health management:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>Digital health records and vaccination tracking</li>
                      <li>Symptom monitoring and health alerts</li>
                      <li>Veterinary appointment scheduling</li>
                      <li>Medication reminders and tracking</li>
                      <li>Emergency care guides</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">Q2 2024</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg ml-12 mr-12">
                    <h3 className="text-2xl font-bold text-gray-800">Phase 3: Community</h3>
                    <p className="text-gray-600 mt-4">Building a supportive pet care community:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>Pet care provider directory with reviews</li>
                      <li>Community forums and discussion boards</li>
                      <li>Local pet events and meetups</li>
                      <li>Expert Q&A sessions</li>
                      <li>Pet adoption integration</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">Q3 2024</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg ml-12 mr-12">
                    <h3 className="text-2xl font-bold text-gray-800">Phase 4: Advanced Features</h3>
                    <p className="text-gray-600 mt-4">Introducing cutting-edge pet care technology:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>AI-powered pet care recommendations</li>
                      <li>Behavior tracking and training guides</li>
                      <li>Nutrition planning and diet tracking</li>
                      <li>Advanced health analytics</li>
                      <li>Integration with smart pet devices</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">Q4 2024</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg ml-12 mr-12">
                    <h3 className="text-2xl font-bold text-gray-800">Phase 5: Expansion</h3>
                    <p className="text-gray-600 mt-4">Global expansion and advanced features:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>Multi-pet household support</li>
                      <li>International pet care standards</li>
                      <li>Language localization</li>
                      <li>Advanced AR pet care simulations</li>
                      <li>Integration with pet insurance providers</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">Q1 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={feedbackRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "My kids have learned so much about responsibility through PetReady. The interactive features make learning fun!"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-gray-800">Sarah M.</h4>
                  <p className="text-gray-500">Parent of two</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "Finally, an app that makes pet care education engaging for the whole family. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-gray-800">Michael T.</h4>
                  <p className="text-gray-500">Pet owner</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "The daily checklists have been a game-changer for our family. My kids are now more responsible with our pets!"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-gray-800">Jennifer L.</h4>
                  <p className="text-gray-500">Parent of three</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "As a veterinarian, I'm impressed by how well PetReady teaches proper pet care to children. It's educational and fun!"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-gray-800">Dr. Emily R.</h4>
                  <p className="text-gray-500">Veterinarian & Parent</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "The family dashboard has made it so easy to coordinate pet care responsibilities. My kids love checking off their tasks!"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-gray-800">David K.</h4>
                  <p className="text-gray-500">Parent of four</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "PetReady has transformed how we care for our pets. The educational content is top-notch and keeps my kids engaged."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-gray-800">Lisa P.</h4>
                  <p className="text-gray-500">Parent & Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Start Your Pet Care Journey?</h2>
          <button
            onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.anonymous.petready&hl=en_US"}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Download Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/assets/logo.png"
                  alt="PetReady logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold">PetReady</span>
              </div>
              <p className="text-gray-400">
                Teaching responsibility through pet ownership
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">support@petready.app</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Funded By</h3>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Georgia Tech</span>
                <span className="text-gray-400">CreateX</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PetReady Inc. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
