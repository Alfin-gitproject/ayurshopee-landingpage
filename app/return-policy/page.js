import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const ReturnRefundPolicy = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Return & Refund Policy">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center py-4">Return & Refund Policy</h1>
          
          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">1. Returns Eligibility</h2>
              <p className="text-gray-700">
                We accept returns within <strong>15 days</strong> of delivery for our natural bathing bars if:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Product is unused and in original packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Safety seal is intact</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Original invoice is provided</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Product quality issue exists (leakage, damaged item)</span>
                </li>
              </ul>
              <p className="text-gray-700 pt-2">
                <strong>Note:</strong> Due to hygiene reasons, we cannot accept returns for opened or used bathing bars.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">2. Return Process</h2>
              <ol className="space-y-3 pl-5 list-decimal">
                <li className="pl-2">
                  Email us at <Link href="mailto:info@ayurshoppee.com" className="text-blue-600 hover:underline">info@ayurshoppee.com</Link> within 15 days of delivery
                </li>
                <li className="pl-2">Include your order number and reason for return</li>
                <li className="pl-2">We'll provide return authorization and instructions</li>
                <li className="pl-2">Package the item securely in original packaging</li>
                <li className="pl-2">Ship to our return address (we'll provide)</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-3">3. Refund Policy</h2>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span><strong>Quality Issues:</strong> 100% refund including shipping costs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span><strong>Change of Mind:</strong> Refund of product value only (shipping costs non-refundable)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span><strong>Refund Method:</strong> Original payment method within 7-10 business days after we receive the return</span>
                </li>
              </ul>
              <p className="text-gray-700 pt-2">
                <strong>Note:</strong> For incorrect items shipped, we'll cover return shipping costs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">4. Non-Returnable Items</h2>
              <p className="text-gray-700">
                The following cannot be returned:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Opened or used bathing bars</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Products without original packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Products purchased more than 15 days ago</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Free promotional items</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">5. Damaged/Defective Products</h2>
              <p className="text-gray-700">
                If you receive a damaged or defective product:
              </p>
              <ol className="space-y-3 pl-5 list-decimal">
                <li className="pl-2">Contact us within 48 hours of delivery</li>
                <li className="pl-2">Provide photos of the damaged product and packaging</li>
                <li className="pl-2">We'll arrange for replacement or refund</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 py-4">6. Contact Us</h2>
              <div className="text-gray-700 space-y-2">
                <p>For return/refund questions:</p>
                <p>Email: <Link href="mailto:info@ayurshoppee.com" className="text-blue-600 hover:underline">info@ayurshoppee.com</Link></p>
                <p>Phone: <Link href="tel:+917510411202" className="text-blue-600 hover:underline">+91 7510411202</Link></p>
                <p>Hours: Mon-Sat, full day</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnRefundPolicy;