import { useSearchParams, useRouter } from "next/navigation";

export const useSortParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setSort = (field: string) => {
    const current = new URLSearchParams(searchParams.toString());
    const currentField = current.get("sort");
    const currentOrder = current.get("order") || "asc";

    const newOrder =
      currentField === field && currentOrder === "asc" ? "desc" : "asc";

    current.set("sort", field);
    current.set("order", newOrder);

    router.replace(`?${current.toString()}`);
  };

  const currentSort = searchParams.get("sort");
  const currentOrder = searchParams.get("order");

  return { setSort, currentSort, currentOrder };
};
