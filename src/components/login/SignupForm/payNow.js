import { useState } from "react";

const usePayment = () => {
    const [payLoading, setPayLoading] = useState(false);
    const [error, setError] = useState(null);

    const payNow = async (formData) => {
        try {
            setPayLoading(true);
            setError(null); // Reset previous errors

            const response = await fetch("/api/initiate-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.paymentUrl) {
                window.location.href = data.paymentUrl; // Redirect to payment page
            } else {
                throw new Error(data.message || "Payment initiation failed");
            }
        } catch (error) {
            console.error("Payment error:", error);
            setError(error.message);
        } finally {
            setPayLoading(false);
        }
    };

    return { payNow, payLoading, error };
};

export default usePayment;
