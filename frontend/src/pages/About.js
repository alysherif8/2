// frontend/src/pages/About.js

import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-mint-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-risd-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-['Brodien_Bold'] mb-6">About Leash</h1>
            <p className="text-xl font-['Gully_CD_Light'] opacity-90">
              Revolutionizing pet care in Egypt and the MENA region through technology and community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-['Brodien_Bold'] text-risd-blue mb-6">Our Mission</h2>
              <p className="text-lg font-['Gully_CD_Light'] text-maya-blue leading-relaxed">
                To serve as the premier centralized platform for pet owners, offering a comprehensive range
                of resources and services to enhance the pet ownership experience. We aim to provide a
                one-stop solution for responsible pet breeding, expert advice, veterinary services, and
                a supportive community network.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-['Brodien_Bold'] text-risd-blue mb-6">Our Vision</h2>
              <p className="text-lg font-['Gully_CD_Light'] text-maya-blue leading-relaxed">
                To revolutionize the pet care landscape in Egypt and the MENA region, reshaping the way
                pet owners connect and engage with one another. We aspire to create an inclusive community
                where both newcomers and seasoned professionals can thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-['Brodien_Bold'] text-risd-blue text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Integrity",
                description: "We maintain the highest standards of honesty and ethical conduct in all our operations.",
                icon: "⭐"
              },
              {
                title: "Community",
                description: "We foster a supportive environment where pet owners can connect, learn, and grow together.",
                icon: "🤝"
              },
              {
                title: "Innovation",
                description: "We continuously strive to improve and innovate our services for better pet care solutions.",
                icon: "💡"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-['Brodien_Medium'] text-risd-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-maya-blue/90 font-['Gully_CD_Light']">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-vista-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-['Brodien_Bold'] text-risd-blue text-center mb-16">
              Why Leash?
            </h2>
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-['Brodien_Medium'] text-risd-blue mb-4">The Challenge</h3>
                <p className="text-lg font-['Gully_CD_Light'] text-maya-blue leading-relaxed">
                  Pet owners in Egypt face numerous challenges, from finding reliable breeding services
                  to accessing quality veterinary care. The lack of a unified platform leads to
                  scattered information, unreliable services, and a disconnected pet owner community.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-['Brodien_Medium'] text-risd-blue mb-4">Our Solution</h3>
                <p className="text-lg font-['Gully_CD_Light'] text-maya-blue leading-relaxed">
                  Leash provides a comprehensive platform that brings together all essential pet services
                  in one place. From AI-powered pet care advice to verified breeding services, veterinary
                  bookings, and a vibrant community platform, we're making pet ownership easier and more
                  enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maya-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-['Brodien_Bold'] mb-6">
              Join the Leash Community
            </h2>
            <p className="text-xl font-['Gully_CD_Light'] mb-12 opacity-90">
              Be part of the revolution in pet care. Download our app today and give your pet the care they deserve.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-8 py-4 bg-white text-maya-blue rounded-full font-['Brodien_Medium'] 
                text-lg transition-all duration-300 hover:bg-azure hover:text-risd-blue shadow-lg">
                Download App
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full 
                  font-['Brodien_Medium'] text-lg transition-all duration-300 hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
