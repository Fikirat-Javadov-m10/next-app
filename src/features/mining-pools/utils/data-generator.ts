import { faker } from "@faker-js/faker";
import { MiningPool, Status } from "../types";

const statuses: Status[] = ["online", "degraded", "offline"];

function generatePool(id: number): MiningPool {
  return {
    id: `pool-${id}`,
    name: `${faker.address.city()} Pool`,
    hashrateTHs: parseFloat(faker.finance.amount({ min: 100, max: 1000 })),
    activeWorkers: faker.number.int({ min: 100, max: 2000 }),
    rejectRate: parseFloat(faker.finance.amount({ min: 0, max: 1 })),
    status: faker.helpers.arrayElement(statuses),
  };
}

export function generatePools(count: number): Promise<MiningPool[]> {
  return Promise.resolve(
    Array.from({ length: count }, (_, i) => generatePool(i + 1))
  );
}
