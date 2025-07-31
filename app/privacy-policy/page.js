import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Privacy Policy">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 py-4">Privacy Policy</h1>
        
        <div className="prose prose-lg">
     

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-3">1. Introduction</h2>
            <p>
              At AYURSHOPPEE, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our 
              website or purchase our natural bathing bars.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email, shipping address when you place an order</li>
              <li><strong>Payment Information:</strong> Processed securely through our payment processor (we don't store credit card details)</li>
              <li><strong>Usage Data:</strong> How you interact with our website (via cookies)</li>
              <li><strong>Communication Data:</strong> Messages you send through contact forms or email</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Improve our products and website</li>
              <li>Send promotional emails (only with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures including SSL encryption and secure payment processing. 
              However, no internet transmission is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-3">5. Third-Party Services</h2>
            <p>
              We may use trusted third parties for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processing (e.g., Stripe, PayPal)</li>
              <li>Shipping carriers (e.g., USPS, FedEx)</li>
              <li>Analytics (e.g., Google Analytics)</li>
            </ul>
            <p className="mt-2">
              These parties have their own privacy policies governing data use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-3">6. Your Rights</h2>
            <p>
              You may request to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your data (unless required for legal compliance)</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="mt-2">
              Contact us at <Link href="mailto:info@ayurshoppee.com" className="text-blue-600">info@ayurshoppee.com</Link> for requests.
            
            </p>
             <p className="mt-2">
           phone: <Link href="tel:+917510411202" className="text-blue-600">+91 7510411202</Link>
            
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-3">7. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. The latest version will always be posted here with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 py-3">8. Contact Us</h2>
            <p >
              For privacy-related questions, contact us at:<br />
              Email: <Link href="mailto:info@ayurshoppee.com" className="text-blue-600">info@ayurshoppee.com</Link><br />
              Mailing Address:Ayurshoppee Enterprises, Door No:5/266B, Mangalassery Tower, Kalamassery Pincode-683104 Cochin, Kerala,India
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;