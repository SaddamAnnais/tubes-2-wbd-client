import ConfirmDialog from '@/components/ConfirmDialog';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X } from 'lucide-react';

interface SubscriptionData {
  creatorId: number;
  creatorName: string;
  requesterId: number;
  requesterName: string;
}

const Subscription = () => {
  const subs: SubscriptionData[] = [
    {
      creatorId: 1,
      creatorName: 'chi',
      requesterId: 2,
      requesterName: 'chi2',
    },
    {
      creatorId: 1,
      creatorName: 'chi',
      requesterId: 2,
      requesterName: 'chi2',
    },
    {
      creatorId: 1,
      creatorName: 'chi',
      requesterId: 2,
      requesterName: 'chi2',
    },
    {
      creatorId: 1,
      creatorName: 'chi',
      requesterId: 2,
      requesterName: 'chi2',
    },
  ];

  const onReject = (idx: number) => {
    console.log('Reject: ' + idx);
  };
  const openRejectModal = (
    <Button variant="outline">
      <X size={18} strokeWidth={3} className="mr-2" />
      Reject
    </Button>
  );

  const onApprove = (idx: number) => {
    console.log('Approve: ' + idx);
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
              <TableHead className="text-left">Creator</TableHead>
              <TableHead className="text-left">Requester</TableHead>
              <TableHead className="text-left">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subs.map((el, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="text-left">{el.creatorName}</TableCell>
                  <TableCell className="text-left">{el.requesterName}</TableCell>
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
