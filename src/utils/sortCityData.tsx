import { City } from "api/getCities";

export interface SortingState {
  key: string;
  direction: "ascending";
}

export const sortCityData = ({
  filteredData,
  sorting,
}: {
  filteredData: City[];
  sorting: SortingState | undefined;
}) => {
  if (!sorting) return filteredData;

  const sortedData = [...filteredData];

  sortedData.sort((a, b) => {
    const valueA = a[sorting.key as keyof City];
    const valueB = b[sorting.key as keyof City];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return sorting.direction === "ascending"
        ? valueA - valueB
        : valueB - valueA;
    } else if (typeof valueA === "string" && typeof valueB === "string") {
      return sorting.direction === "ascending"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return 0;
  });

  return sortedData;
};
