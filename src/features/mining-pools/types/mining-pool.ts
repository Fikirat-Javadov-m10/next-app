export type Status = "online" | "degraded" | "offline";

export type MiningPool = {
  id: string;
  name: string;
  hashrateTHs: number;
  activeWorkers: number;
  rejectRate: number;
  status: Status;
};

type SortableMiningPool = Pick<
  MiningPool,
  "activeWorkers" | "hashrateTHs" | "rejectRate"
>;

type Order = "asc" | "desc";

export type SortSearchParams = {
  sort?: keyof SortableMiningPool;
  order?: Order;
};
