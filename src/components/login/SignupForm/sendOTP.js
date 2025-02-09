const SendOTP = async (setVerified, email) => {
    try {
        let response = await fetch('/api/auth/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (data.available) {
            const otp_code = generateOTP(); // generating OTP
            const templateId = data.templateId
            const serviceId = data.serviceId
            const publickey = data.publickey

            const messageData = {
                service_id: serviceId,
                template_id: templateId,
                user_id: publickey,
                template_params: {
                    name: email,  
                    otp_code: otp_code.toString()  // Convert OTP to string
                }
            };

            await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(messageData),
            });

            setVerified("processing");

            return otp_code
        } else {
            setVerified("notAvailable")
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