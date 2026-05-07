import Subscription from "../models/Subscription";

export const createSubscription = async (req: any, res: any) => {
  const sub = await Subscription.create({
    userId: req.body.userId,
    plan: req.body.plan,
    status: "active"
  });

  res.json(sub);
};