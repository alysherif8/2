// frontend/src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <div className="min-h-screen bg-mint-cream">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-risd-blue opacity-95"></div>
        <motion.div 
          className="container mx-auto px-6 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-4xl">
            <motion.h1 
              className="text-6xl md:text-7xl font-['Brodien_Bold'] text-white mb-8 leading-tight"
              variants={fadeInUp}
            >
              Your Complete Pet Care Companion
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-['Gully_CD_Light'] text-white/90 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Revolutionizing pet care in Egypt with a comprehensive platform for responsible breeding,
              expert advice, and community connection.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-white text-risd-blue rounded-full 
                  font-['Brodien_Medium'] text-lg transition-all duration-300 hover:bg-azure 
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-maya-blue">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-['Brodien_Bold'] text-risd-blue text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Everything Your Pet Needs
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Responsible Breeding",
                description: "Connect with verified breeders and access expert guidance for ethical pet breeding practices.",
                icon: "🐾"
              },
              {
                title: "Expert AI Advice",
                description: "Get instant, reliable answers to your pet care questions with our AI-powered chat support.",
                icon: "🤖"
              },
              {
                title: "Veterinary Services",
                description: "Book appointments with trusted veterinarians and track your pet's health records.",
                icon: "⚕️"
              },
              {
                title: "Pet Community",
                description: "Join a supportive network of pet owners, arrange playdates, and share experiences.",
                icon: "👥"
              },
              {
                title: "Grooming Services",
                description: "Schedule grooming appointments and maintain your pet's hygiene with ease.",
                icon: "✨"
              },
              {
                title: "Pet Moments",
                description: "Share your pet's precious moments with our loving community of pet enthusiasts.",
                icon: "📸"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-mint-cream p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-['Brodien_Medium'] text-risd-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-maya-blue/90 font-['Gully_CD_Light']">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-maya-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              className="text-4xl font-['Brodien_Bold'] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Pet Care Journey?
            </motion.h2>
            <motion.p 
              className="text-xl font-['Gully_CD_Light'] mb-12 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Join Leash today and experience the future of pet care. Your pet deserves the best!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center gap-6">
                <button className="px-8 py-4 bg-white text-maya-blue rounded-full font-['Brodien_Medium'] 
                  text-lg transition-all duration-300 hover:bg-azure hover:text-risd-blue shadow-lg">
                  Download App
                </button>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full 
                    font-['Brodien_Medium'] text-lg transition-all duration-300 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
