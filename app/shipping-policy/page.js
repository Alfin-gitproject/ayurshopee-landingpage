import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const ShippingPolicy = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Shipping Policy">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center py-4">Shipping & Delivery Policy</h1>

          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">1. Shipping Areas</h2>
              <p className="text-gray-700">
                We currently ship our natural bathing bars only within India.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">2. Order Processing</h2>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Orders are processed within <strong>1-2 business days</strong> after payment confirmation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Orders placed on weekends or public holidays will be processed on the next business day</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">3. Shipping Timelines</h2>
              <p className="text-gray-700">
                Delivery times may vary depending on the destination:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span><strong>Metro Cities:</strong> 3-5 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span><strong>Other Areas:</strong> 5-7 business days</span>
                </li>
              </ul>
              <p className="text-gray-700 pt-2">
                These timelines are estimates and may vary due to unforeseen circumstances.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">4. Shipping Costs</h2>
              <p className="text-gray-700">
                We offer <strong>free shipping</strong> for all orders within India.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">5. Tracking Your Order</h2>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>You will receive a tracking number once your order is shipped</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Track your order status on our website by logging into your account</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">6. Delivery Delays</h2>
              <p className="text-gray-700">
                While we strive for timely delivery, delays may occur due to:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Courier delays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Natural disasters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Incorrect address details</span>
                </li>
              </ul>
              <p className="text-gray-700 pt-2">
                We will notify you of any delays and work to resolve them promptly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">7. Damaged/Missing Packages</h2>
              <p className="text-gray-700">
                For lost or damaged shipments:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Contact us immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>We'll investigate and arrange replacement at no extra cost</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">8. Returns</h2>
              <p className="text-gray-700">
                Our natural bathing bars can be returned within <strong>15 days</strong> of delivery if:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Product is unused and in original packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>All safety seals are intact</span>
                </li>
              </ul>
              <p className="text-gray-700 pt-2">
                See our <Link href="/return-policy" className="text-blue-600 hover:underline">Return Policy</Link> for details.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">9. Contact Us</h2>
              <div className="text-gray-700 space-y-2">
                <p>For shipping inquiries:</p>
                <p>Email: <Link href="mailto:info@ayurshoppee.com" className="text-blue-600 hover:underline">info@ayurshoppee.com</Link></p>
                <p>Phone: <Link href="tel:+917510411202" className="text-blue-600 hover:underline">+91 7510411202</Link></p>
                <p>Address: Ayurshoppee Enterprises, Door No:5/266B, Mangalassery Tower, Kalamassery Pincode-683104 Cochin, Kerala, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicy;