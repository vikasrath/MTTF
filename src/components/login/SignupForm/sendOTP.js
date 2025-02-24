const SendOTP = async (setVerified, email) => {
    try {
        let response = await fetch('/api/auth/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (data.otp) {

            setVerified("processing");

            return data.otp
        } else if(data.message) {
            setVerified("notAvailable")
            toast.error(data.message)
            return undefined
        }
    } catch (error) {
        alert("something went wrong ! try again later")
        return undefined
    }
};

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
  }

export default SendOTP