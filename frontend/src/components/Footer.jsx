import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-100 py-4 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-base-content/70">
          &copy; {new Date().getFullYear()} POSGRESTORE. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy" className="text-base-content/70 hover:underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="/terms" className="text-base-content/70 hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
