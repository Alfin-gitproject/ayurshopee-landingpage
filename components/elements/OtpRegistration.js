"use client";
import React from "react";
import { useState } from "react";
import { auth } from "../../firebase.config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { registerUser } from "@/services/auth/register";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const OtpRegistration = ({ closeModal }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);
  const router = useRouter();

  // Timer for resend OTP
  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  // Setup reCAPTCHA
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
        }
      );
    }
  };

  // Send OTP
  const handleSendOtp = async () => {
    setError("");
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setIsLoading(true);
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );
      setVerificationId(confirmation.verificationId);
      setResendDisabled(true);
      setTimer(60);
      Swal.fire({
        title: "OTP Sent",
        text: "Check your phone for the OTP.",
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      setError("Failed to send OTP. Try again.");
    }
    setIsLoading(false);
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    setIsLoading(true);
    setError("");
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const idToken = await result.user.getIdToken();
      await registerUser(userData, idToken);
      const result = await signInWithCredential(auth, credential);
      // Prepare user data for backend
      const userData = {
        name: "phone-user",
        phone: "+91" + phone,
        email: `phoneloggeduser${otp + result.user.uid}@gmail.com`,
        password: otp,
        accessToken: result.user.accessToken,
        provider: "phone",
      };
      const backendResponse = await registerUser(userData);
      if (backendResponse) {
        closeModal();
        Swal.fire({
          title: "Success!",
          text: "OTP verification successful.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      setError("Invalid OTP or verification failed.");
      Swal.fire({
        title: "Verification Failed",
        text: "Invalid OTP or verification failed.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-end">
        <button onClick={() => closeModal()}>
          <FontAwesomeIcon color="#000" icon={faX} />
        </button>
      </div>
      <div id="recaptcha-container"></div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="text-center mb-4">
            <h4>Sign in with OTP</h4>
            <p>Enter your mobile number to receive an OTP</p>
          </div>
          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              <p>{error}</p>
            </div>
          )}
          {!verificationId ? (
            <>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                />
              </div>
              <div className="d-grid mb-4">
                <button
                  className="btn btn-success d-flex align-items-center justify-content-center"
                  onClick={handleSendOtp}
                  disabled={isLoading}
                  style={{
                    backgroundColor: "#1a6d31",
                    borderColor: "#1a6d31",
                    padding: "12px 20px",
                    fontSize: "16px",
                  }}
                >
                  {isLoading ? (
                    <div
                      style={{ width: "2rem", height: "2rem" }}
                      className="spinner-border text-light"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        style={{ marginRight: "10px" }}
                      />
                      Send OTP
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">
                  OTP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
                  placeholder="Enter OTP"
                  maxLength={6}
                />
              </div>
              <div className="d-grid mb-3">
                <button
                  className="btn btn-success"
                  onClick={handleVerifyOtp}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div
                      style={{ width: "2rem", height: "2rem" }}
                      className="spinner-border text-light"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Verify OTP"
                  )}
                </button>
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-tertiary"
                  onClick={handleSendOtp}
                  disabled={resendDisabled || isLoading}
                >
                  {resendDisabled ? `Resend OTP (${timer})` : "Resend OTP"}
                </button>
              </div>
            </>
          )}
          {/* <div className="text-center text-muted mt-3">
            <small>
              By signing in, you agree to our terms of service and privacy
              policy.
            </small>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OtpRegistration;
