import api from "../api/axios";

export default function Subscription() {
  const subscribe = async (plan: string) => {
    await api.post("/subscriptions", {
      userId: "123",
      plan
    });

    alert("Subscription Activated");
  };

  return (
    <div>
      <h1>Subscription Plans</h1>

      <button onClick={() => subscribe("free")}>Free</button>
      <button onClick={() => subscribe("pro")}>Pro</button>
      <button onClick={() => subscribe("enterprise")}>
        Enterprise
      </button>
    </div>
  );
}