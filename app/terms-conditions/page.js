import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const TermsAndConditions = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Terms and Conditions">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb Navigation */}
         
          
          {/* Main Content */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terms and Conditions</h1>
            

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">1. General Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and purchasing from Ayurshoppee, you agree to be bound by these terms. Our natural bathing bars are for external use only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">2. Product Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>All products are handmade with natural ingredients</li>
                  <li>Color and texture may vary slightly between batches</li>
                  <li>We recommend patch testing for sensitive skin</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">3. Orders & Payments</h2>
                <p className="text-gray-700 mb-4">
                  All orders are subject to availability. We accept:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Credit/Debit Cards</li>
                  <li>PayPal</li>
                  <li>Other payment methods as displayed at checkout</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">4. Shipping Policy</h2>
                <p className="text-gray-700 mb-4">
                  We ship within 2-3 business days. Delivery times vary by location. International customers are responsible for any customs fees.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">5. Returns & Refunds</h2>
                <p className="text-gray-700 mb-4">
                  Due to the nature of our products:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>We accept returns within 14 days of delivery</li>
                  <li>Products must be unopened and in original condition</li>
                  <li>Shipping costs are non-refundable</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">6. Liability</h2>
                <p className="text-gray-700 mb-4">
                 Ayurshoppee is not liable for any allergic reactions or misuse of products. Discontinue use if irritation occurs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">7. Changes to Terms</h2>
                <p className="text-gray-700">
                  We may update these terms periodically. The updated version will be posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">8. Contact Us</h2>
                <p className="text-gray-700">
                  For questions about these terms: <br />
                  Email: <Link href="mailto:info@ayurshoppee.com" className="text-blue-600 hover:underline">info@ayurshoppee.com</Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;