// frontend/src/pages/Contact.js

import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-mint-cream">
      {/* Header */}
      <div className="bg-maya-blue py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-brodien-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl font-gully text-white/90 max-w-2xl mx-auto">
            Have questions? We're here to help you find the perfect pet care solution.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-3xl mx-auto py-16 px-4">
        <div className="space-y-8">
          <h2 className="text-3xl font-brodien-bold text-dark-gray mb-8 text-center">
            Ways to Reach Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-azure p-3 rounded-md mr-4">
                <svg className="w-6 h-6 text-risd-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-brodien-medium text-dark-gray text-xl mb-2">Email</h3>
                <p className="font-gully text-dark-gray/80">info@leashpets.com</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-azure p-3 rounded-md mr-4">
                <svg className="w-6 h-6 text-risd-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-brodien-medium text-dark-gray text-xl mb-2">Phone</h3>
                <p className="font-gully text-dark-gray/80">+20 1017797047</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
