export const processPayment = async (plan: string) => {
  return {
    success: true,
    transactionId: "TXN" + Date.now(),
    plan
  };
};