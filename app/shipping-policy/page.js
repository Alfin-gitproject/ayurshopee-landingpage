import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const ShippingPolicy = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Shipping Policy">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
       
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shipping & Delivery Policy</h1>
         

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">1. Shipping Areas</h2>
                <p className="text-gray-700 mb-4">
                  We currently ship our natural bathing bars only within India.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">2. Order Processing</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Orders are processed within <strong>1-2 business days</strong> after payment confirmation</li>
                  <li>Orders placed on weekends or public holidays will be processed on the next business day</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">3. Shipping Timelines</h2>
                <p className="text-gray-700 mb-4">
                  Delivery times may vary depending on the destination:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Metro Cities:</strong> 3-5 business days</li>
                  <li><strong>Other Areas:</strong> 5-7 business days</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  These timelines are estimates and may vary due to unforeseen circumstances.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">4. Shipping Costs</h2>
                <p className="text-gray-700">
                  We offer <strong>free shipping</strong> for all orders within India.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">5. Tracking Your Order</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You will receive a tracking number once your order is shipped</li>
                  <li>Track your order status on our website by logging into your account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">6. Delivery Delays</h2>
                <p className="text-gray-700 mb-4">
                  While we strive for timely delivery, delays may occur due to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Courier delays</li>
                  <li>Natural disasters</li>
                  <li>Incorrect address details</li>
                </ul>
                <p className="text-gray-700">
                  We will notify you of any delays and work to resolve them promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">7. Damaged/Missing Packages</h2>
                <p className="text-gray-700 mb-4">
                  For lost or damaged shipments:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Contact us immediately</li>
                  <li>We'll investigate and arrange replacement at no extra cost</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">8. Returns</h2>
                <p className="text-gray-700 mb-4">
                  Our natural bathing bars can be returned within <strong>15 days</strong> of delivery if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Product is unused and in original packaging</li>
                  <li>All safety seals are intact</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  See our <Link href="/return-policy" className="text-blue-600 hover:underline">Return Policy</Link> for details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">9. Contact Us</h2>
                <p className="text-gray-700">
                  For shipping inquiries:<br />
                  Email: <Link href="mailto:info@ayurshoppee.com" className="text-blue-600 hover:underline">info@ayurshoppee.com</Link><br />
                  Phone: <Link href="tel:+911234567890" className="text-blue-600 hover:underline">+91 7510411202</Link><br />
                  Address: Ayurshoppee Enterprises, Door No:5/266B, Mangalassery Tower, Kalamassery Pincode-683104 Cochin, Kerala,India
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicy;