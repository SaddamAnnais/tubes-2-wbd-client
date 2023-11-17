import { APIInstance } from '.';

const approveSubscriptionAPI = async (creatorID: number, subscriberID: number) => {
  const res = await APIInstance.post('/subscription/approve', {
    creatorID,
    subscriberID,
  });
  return res.data;
};

export default approveSubscriptionAPI;
