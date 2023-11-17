import { APIInstance } from '.';

const rejectSubscriptionAPI = async (creatorID: number, subscriberID: number) => {
  const res = await APIInstance.post('/subscription/reject', {
    creatorID,
    subscriberID,
  });
  return res.data;
};

export default rejectSubscriptionAPI;
