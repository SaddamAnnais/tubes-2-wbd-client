import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface SubscriptionData {
  creatorId: number;
  creatorName: string;
  requesterId: number;
  requesterName: string;
}

const Subscription = () => {
  // const [selectedIdx, setSelectedIdx] = useState(0);
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

  // const handleApprove = (idx: number) => {
  //   setSelectedIdx(idx);
  // };

  // const openRejectModal = (idx: number) => {
  //   setSelectedIdx(idx);
  // };

  return (
    <main className="w-full h-full pt-32 py-8 px-20">
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
                    <Button>
                      <Check size={18} strokeWidth={3} className="mr-2" />
                      Approve
                    </Button>
                    <Button variant="outline">
                      <X size={18} strokeWidth={3} className="mr-2" />
                      Reject
                    </Button>
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
