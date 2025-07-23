import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const ReturnRefundPolicy = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Return & Refund Policy">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Return & Refund Policy</h1>
        

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">1. Returns Eligibility</h2>
                <p className="text-gray-700 mb-4">
                  We accept returns within <strong>15 days</strong> of delivery for our natural bathing bars if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Product is unused and in original packaging</li>
                  <li>Safety seal is intact</li>
                  <li>Original invoice is provided</li>
                  <li>Product quality issue exists (leakage, damaged item)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Note:</strong> Due to hygiene reasons, we cannot accept returns for opened or used bathing bars.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">2. Return Process</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Email us at <Link href="mailto:info@ayurshoppee.com" className="text-blue-600 hover:underline">info@ayurshoppee.com</Link> within 15 days of delivery</li>
                  <li>Include your order number and reason for return</li>
                  <li>We'll provide return authorization and instructions</li>
                  <li>Package the item securely in original packaging</li>
                  <li>Ship to our return address (we'll provide)</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">3. Refund Policy</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Quality Issues:</strong> 100% refund including shipping costs</li>
                  <li><strong>Change of Mind:</strong> Refund of product value only (shipping costs non-refundable)</li>
                  <li><strong>Refund Method:</strong> Original payment method within 7-10 business days after we receive the return</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Note:</strong> For incorrect items shipped, we'll cover return shipping costs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">4. Non-Returnable Items</h2>
                <p className="text-gray-700 mb-4">
                  The following cannot be returned:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Opened or used bathing bars</li>
                  <li>Products without original packaging</li>
                  <li>Products purchased more than 15 days ago</li>
                  <li>Free promotional items</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">5. Damaged/Defective Products</h2>
                <p className="text-gray-700 mb-4">
                  If you receive a damaged or defective product:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Contact us within 48 hours of delivery</li>
                  <li>Provide photos of the damaged product and packaging</li>
                  <li>We'll arrange for replacement or refund</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">6. Contact Us</h2>
                <p className="text-gray-700">
                  For return/refund questions:<br />
                  Email: <Link href="mailto:info@ayurshoppee.com" className="text-blue-600 hover:underline">info@ayurshoppee.com</Link><br />
                  Phone: <Link href="tel:+917510411202" className="text-blue-600 hover:underline">+91 7510411202</Link><br />
                  Hours: Mon-Sat, full day
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnRefundPolicy;