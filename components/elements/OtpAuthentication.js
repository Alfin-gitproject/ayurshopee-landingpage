'use client'
import { useState, useEffect } from 'react';
import { auth } from '../../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { registerUser } from '@/services/auth/register';
import { createOrder } from '@/services/orders/order';
import transformUserDataToOrderSchema from '@/utils/transFormOrderData';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const OTPAuthentication = ({ phone, name, shippingInfo, Quantity, closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState(phone || '');
  const [Name, setName] = useState(name || '');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [timer, setTimer] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {},
        'expired-callback': () => {}
      });
    }
  };

  const validateAndFormatPhoneNumber = (phone) => {
    phone = phone.trim();
    if (!phone.startsWith('+91')) phone = '+91' + phone;
    const phoneNumberWithoutPrefix = phone.replace('+91', '');
    const isValid = /^\d{10}$/.test(phoneNumberWithoutPrefix);
    if (isValid) {
      setPhoneError('');
      return phone;
    } else {
      setPhoneError('Invalid phone number. It should contain exactly 10 digits');
      throw new Error('Invalid phone number. It should contain exactly 10 digits');
    }
  };

  const handleSendOtp = async (phoneNumberToSend) => {
    setError('');
    try {
      const formattedPhoneNumber = validateAndFormatPhoneNumber(phoneNumberToSend);
      setIsLoading(true);
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setPhoneNumber(formattedPhoneNumber);
      setResendDisabled(true);
      setTimer(60);
      Swal.fire({ title: 'OTP Sent', text: 'Check your phone for the OTP.', icon: 'info', timer: 2000, showConfirmButton: false });
    } catch (error) {
      setError("Error sending OTP. Please check the phone number and try again.");
      Swal.fire({ title: 'Failed', text: 'Could not send OTP. Check your number.', icon: 'error', confirmButtonText: 'OK' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    setError('');
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const result = await signInWithCredential(auth, credential);
      const accessToken = result.user.accessToken;
      const password = otp + '@stamen';
      const userData = {
        name: Name || 'phone-user',
        phone: phoneNumber,
        password,
        accessToken,
        provider: 'phone'
      };
      const data = await registerUser(userData);
      if (data?.user?.id) {
        const orderData = transformUserDataToOrderSchema(shippingInfo, data.user.id, Quantity);
        const orderRes = await createOrder(orderData);
        if (orderRes._id) {
          Swal.fire({
            title: 'Order Success',
            text: 'Your order was successful!',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Order Details',
            cancelButtonText: 'View Orders',
          }).then((result) => {
            if (result.isConfirmed) {
              router.push(`/orders/${orderRes._id}`);
            } else {
              router.push(`/orders`);
            }
          });
          closeModal();
        }
      }
    } catch (error) {
      setError('Invalid OTP or verification failed.');
      Swal.fire({
        title: 'Verification Failed',
        text: 'Invalid OTP or verification failed.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-2">
      <div id="recaptcha-container"></div>
      <div className='d-flex justify-content-end'>
        <button onClick={() => closeModal()}>
          <FontAwesomeIcon color='#000' icon={faX} />
        </button>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="text-center mb-4">
            <h4>Sign in with OTP</h4>
            <p>Enter your mobile number to receive an OTP</p>
          </div>
          {!verificationId ? (
            <>
              <div className="mb-3">
                {error && <div style={{ color: 'red', marginBottom: '10px' }}><p>{error}</p></div>}
                <label htmlFor="phoneNumber" className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  value={phoneNumber.replace('+91', '')}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/,''))}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                />
                {phoneError && <div className="text-danger">{phoneError}</div>}
              </div>
              <div className="d-grid mb-4">
                <button
                  className="btn btn-success d-flex align-items-center justify-content-center"
                  onClick={() => handleSendOtp(phoneNumber)}
                  disabled={isLoading}
                  style={{
                    backgroundColor: '#1a6d31',
                    borderColor: '#1a6d31',
                    padding: '12px 20px',
                    fontSize: '16px'
                  }}
                >
                  {isLoading ? (
                    <div style={{width:'2rem',height:'2rem'}} className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '10px' }} />
                      Send OTP
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">OTP</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/,''))}
                  placeholder="Enter OTP"
                />
              </div>
              <div className="d-grid mb-3">
                <button className="btn btn-success" onClick={handleVerifyOtp} disabled={isLoading}>
                  {isLoading ? (
                    <div style={{width:'2rem',height:'2rem'}} className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    'Verify OTP'
                  )}
                </button>
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-tertiary"
                  onClick={() => handleSendOtp(phoneNumber)}
                  disabled={resendDisabled || isLoading}
                >
                  {resendDisabled ? `Resend OTP (${timer})` : 'Resend OTP'}
                </button>
              </div>
            </>
          )}
          <div className="text-center text-muted mt-3">
            <small>
              By signing in, you agree to our terms of service and privacy policy.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPAuthentication;