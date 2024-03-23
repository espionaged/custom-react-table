import { useState, useCallback, useEffect } from "react";
import { City, getCities } from "api/getCities";
import { SortingState } from "./sortCityData";

export function useQuery({
  searchTerm,
  pagination,
  sorting,
}: {
  searchTerm: string;
  pagination: { page: number; perPage: number };
  sorting: SortingState;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [hasError, setHasError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  const { page: offset, perPage: limit } = pagination;
  const hasNextPage = pagination.page < totalPages - 1;
  const hasPreviousPage = pagination.page > 0;

  const runSearch = useCallback(
    async (term: string) => {
      try {
        setHasError(null);
        setIsLoading(true);
        const params = {
          searchTerm: term,
          limit,
          offset,
          sorting,
        };
        const { data, totalPages } = await getCities(params);
        setCities(data);
        setTotalPages(totalPages);
        setIsLoading(false);
      } catch (err: any) {
        setHasError(err);
        setIsLoading(false);
      }
    },
    [sorting.key, offset, limit, searchTerm]
  );

  useEffect(() => {
    runSearch(searchTerm);
  }, [runSearch, searchTerm]);

  return {
    data: cities,
    hasNextPage,
    hasPreviousPage,
    totalPages,
    currentTableStatus: {
      isEmpty: !Boolean(cities.length),
      isLoading,
      hasError,
    },
  };
}
