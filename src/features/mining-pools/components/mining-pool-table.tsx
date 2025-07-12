import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell } from "@/components/ui/table";
import { MiningPool } from "@/features/mining-pools/types";
import { TableRowLink } from "./table-row-link";
import { TableHeaders } from "./table-headers";

type PoolTableProps = {
  data: MiningPool[];
};

export const MiningPoolTable = ({ data }: PoolTableProps) => {
  return (
    <Table>
      <TableHeaders />
      <TableBody>
        {data.map((mp) => (
          <TableRowLink key={mp.id} id={mp.id}>
            <TableCell>{mp.name}</TableCell>
            <TableCell>{mp.hashrateTHs}</TableCell>
            <TableCell>{mp.activeWorkers}</TableCell>
            <TableCell>{(mp.rejectRate * 100).toFixed(0)} %</TableCell>
            <TableCell>
              <Badge className="w-full" variant={mp.status}>
                {mp.status}
              </Badge>
            </TableCell>
          </TableRowLink>
        ))}
      </TableBody>
    </Table>
  );
};
