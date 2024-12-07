
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Exclusive */}
          <div>
            <h3 className="font-semibold mb-4">Exclusive</h3>
            <p>Get 10% off your first order</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-4 px-4 py-2 w-full rounded-md text-gray-900"
            />
          </div>
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <p>111 Bijoy Sarani, Dhaka</p>
            <p>DH 1515, Bangladesh</p>
            <p>Email: exclusive@gmail.com</p>
            <p>Phone: +88015-88888-9999</p>
          </div>
          {/* Account */}
          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Link</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Download App */}
          <div>
            <h3 className="font-semibold mb-4">Download App</h3>
            <p>Save $3 With App New User Only</p>
            <div className="mt-4 space-y-2">
              <img src="/google-play.png" alt="Google Play" className="h-10" />
              <img src="/app-store.png" alt="App Store" className="h-10" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © Copyright Rimel 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;