"use client";

import { TableRow } from "@/components/ui/table";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

type RowLinkProps = {
  id: string;
  children: ReactNode;
};

export const TableRowLink = ({ id, children }: RowLinkProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("id", id);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <TableRow className="cursor-pointer" onClick={handleClick}>
      {children}
    </TableRow>
  );
};
