import toast from 'react-hot-toast';
import { Resend } from 'resend';

const resetOTP = async (email, setVerified) => {
    try {
        const response = await fetch('/api/auth/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json(); // Collecting response data

        if (!response.ok) {
            toast.error(data.message || 'Failed to send OTP');
            throw new Error(data.message || "Something went wrong");
        }

        if ( data.otp) {

            setVerified("processing");

            return data.otp;
        } else if(data.message) {
            setVerified("notAvailable")
            toast.error(data.message)
            return undefined
        }

    } catch (error) {
        console.error("Error checking user:", error);
        return null; // Return null if an error occurs
    }
}

  export default resetOTP;