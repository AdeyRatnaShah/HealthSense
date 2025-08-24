import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import ScrollToTop from '../layouts/ScrollTop';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      {/* Navbar fixed on top for better UX */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar (Personalize) - hidden on small screens */}
        {/* <aside className="hidden md:block w-64 bg-white shadow-md rounded-lg p-4 mr-6">
          <Personalize />
        </aside> */}

        {/* Dynamic Page Content */}
        <section className="flex-1 bg-white shadow-md rounded-xl ">
          <Outlet />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
