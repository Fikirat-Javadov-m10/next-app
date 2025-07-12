export function sortByField<
  TObj extends Record<string, unknown>,
  TKey extends keyof TObj
>(data: TObj[], field: TKey, order: "asc" | "desc"): TObj[] {
  return [...data].sort((a, b) => {
    const aValue = Number(a[field]);
    const bValue = Number(b[field]);

    if (isNaN(aValue) || isNaN(bValue)) return 0;

    return order === "asc" ? aValue - bValue : bValue - aValue;
  });
}
