"use client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MiningPoolDetiled } from "../types";

type MiningPoolModalProps = {
  data: MiningPoolDetiled;
};
export const MiningPoolModal = ({ data }: MiningPoolModalProps) => {
  const router = useRouter();

  const onOpenChange = () => {
    const current = new URLSearchParams(window.location.search);
    current.delete("id");

    const newSearch = current.toString();
    const newUrl = newSearch ? `/?${newSearch}` : "/";
    router.replace(newUrl);
  };

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detailed view</DialogTitle>
          <div className="flex justify-between">
            <span className="text-bold">Fee Percentage</span>
            <span>{data.feePercent}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Location</span>
            <span>{data.location}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Last 24h revenue BTC</span>
            <span>{data.last24hRevenueBTC}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Uptime percent</span>
            <span>{data.uptimePercent}</span>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
