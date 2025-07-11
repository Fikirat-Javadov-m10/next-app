export type Status = "online" | "degraded" | "offline";

export type MiningPool = {
  id: string;
  name: string;
  hashrateTHs: number;
  activeWorkers: number;
  rejectRate: number;
  status: Status;
};
