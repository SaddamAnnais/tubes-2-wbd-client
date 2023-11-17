import ConfirmDialog from '@/components/ConfirmDialog';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAPI } from '@/contexts';
import { Check, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SubscriptionData {
  creatorID: number;
  subscriberID: number;
}

const Subscription = () => {
  const [subs, setSubs] = useState<SubscriptionData[]>();
  const { api } = useAPI();

  const fetch = async () => {
    const data = await api.getPendingSubs();
    if (!data.data) {
      return;
    }
    setSubs(data.data);
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onReject = async (idx: number) => {
    await api.rejectSubscription(subs![idx].creatorID, subs![idx].subscriberID);
  };

  const openRejectModal = (
    <Button variant="outline">
      <X size={18} strokeWidth={3} className="mr-2" />
      Reject
    </Button>
  );

  const onApprove = async (idx: number) => {
    await api.approveSubscription(subs![idx].creatorID, subs![idx].subscriberID);
  };

  const openApproveModal = (
    <Button>
      <Check size={18} strokeWidth={3} className="mr-2" />
      Approve
    </Button>
  );

  return (
    <main className="w-full h-full pt-32 py-8 px-10 sm:px-20">
      <header className="flex flex-row justify-between mb-8">
        <h1 className="font-bold text-5xl">Manage Subscriptions</h1>
      </header>
      <div className="w-full h-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Creator ID</TableHead>
              <TableHead className="text-left">Requester ID</TableHead>
              <TableHead className="text-left">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subs &&
              subs.map((el, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="text-left">{el.creatorID}</TableCell>
                    <TableCell className="text-left">{el.subscriberID}</TableCell>
                    <TableCell className="flex flex-row gap-4">
                      <ConfirmDialog
                        title="Approve Subscription"
                        desc="Are you sure? This action cannot be undone."
                        onConfirm={() => {
                          onApprove(i);
                        }}
                        openButton={openApproveModal}
                      />
                      <ConfirmDialog
                        title="Reject Subscription"
                        desc="Are you sure? This action cannot be undone."
                        onConfirm={() => {
                          onReject(i);
                        }}
                        openButton={openRejectModal}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default Subscription;
