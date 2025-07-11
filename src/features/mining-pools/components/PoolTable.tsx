import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MiningPool } from "@/features/mining-pools/types";

type PoolTableProps = {
  miningPools: MiningPool[];
};

const PoolTable = ({ miningPools }: PoolTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Название пула</TableHead>
          <TableHead>Хешрейт (в TH/s)</TableHead>
          <TableHead>Активные воркеры</TableHead>
          <TableHead>Reject rate (в долях или %)</TableHead>
          <TableHead>Статус</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {miningPools.map((mp) => (
          <TableRow key={mp.id}>
            <TableCell>{mp.name}</TableCell>
            <TableCell>{mp.hashrateTHs}</TableCell>
            <TableCell>{mp.activeWorkers}</TableCell>
            <TableCell>{(mp.rejectRate * 100).toFixed(0)} %</TableCell>
            <TableCell>
              <Badge className="w-full" variant={mp.status}>
                {mp.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PoolTable;
