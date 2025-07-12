"use client";

import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useSortParams } from "@/hooks/use-sort-params";

const columns = [
  { label: "Хешрейт (в TH/s)", field: "hashrateTHs" },
  { label: "Активные воркеры", field: "activeWorkers" },
  { label: "Reject rate (в долях или %)", field: "rejectRate" },
];

export const TableHeaders = () => {
  const { setSort, currentSort, currentOrder } = useSortParams();

  return (
    <TableHeader>
      <TableRow>
        <TableHead>Название пула</TableHead>
        {columns.map((col) => {
          const isActive = currentSort === col.field;
          const Icon = currentOrder === "desc" ? ArrowDown : ArrowUp;

          return (
            <TableHead
              key={col.field}
              onClick={() => setSort(col.field)}
              className="cursor-pointer select-none"
            >
              {col.label}
              {isActive && <Icon size={16} className="text-primary inline" />}
            </TableHead>
          );
        })}
        <TableHead>Статус</TableHead>
      </TableRow>
    </TableHeader>
  );
};
