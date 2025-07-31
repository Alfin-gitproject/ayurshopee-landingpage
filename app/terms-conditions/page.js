import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const TermsAndConditions = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Terms and Conditions">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center py-4">Terms and Conditions</h1>
          
          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">1. General Terms</h2>
              <p className="text-gray-700">
                By accessing and purchasing from Ayurshoppee, you agree to be bound by these terms. Our natural bathing bars are for external use only.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">2. Product Information</h2>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>All products are handmade with natural ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Color and texture may vary slightly between batches</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>We recommend patch testing for sensitive skin</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">3. Orders & Payments</h2>
              <p className="text-gray-700">
                All orders are subject to availability. We accept:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Credit/Debit Cards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>PayPal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Other payment methods as displayed at checkout</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">4. Shipping Policy</h2>
              <p className="text-gray-700">
                We ship within 2-3 business days. Delivery times vary by location. International customers are responsible for any customs fees.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">5. Returns & Refunds</h2>
              <p className="text-gray-700">
                Due to the nature of our products:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>We accept returns within 14 days of delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Products must be unopened and in original condition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Shipping costs are non-refundable</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">6. Liability</h2>
              <p className="text-gray-700">
                Ayurshoppee is not liable for any allergic reactions or misuse of products. Discontinue use if irritation occurs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">7. Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these terms periodically. The updated version will be posted on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">8. Contact Us</h2>
              <div className="text-gray-700 space-y-2">
                <p>For questions about these terms:</p>
                <p>Email: <Link href="mailto:info@ayurshoppee.com" className="text-blue-600 hover:underline">info@ayurshoppee.com</Link></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;