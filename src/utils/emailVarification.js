

const verifyEmail = async (email) => {
    const otp_code = generateOTP();
    const templateId = "template_hv4iq1i"
    const serviceId = "service_7jz4ehr"
    const publickey = "EOonM8mjwQrqaZtuI"


    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publickey,
        template_params: {
            name: email,  // Assuming EmailJS template uses {{name}}
            otp_code: otp_code.toString()  // Convert OTP to string
        }
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // alert('Verification email sent successfully!');
           return otp_code;
        } else {
            const errorData = await response.json();
            alert('Failed to send email: ' + errorData.text);
        }
    } catch (error) {
        alert('Oops... Something went wrong!');
        console.error(error);
    }
};

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

export default verifyEmail;



