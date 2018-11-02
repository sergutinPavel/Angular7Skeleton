export interface IPagination {
  current_page?: number;
  from?: number;
  last_page?: number;
  per_page?: number;
  to?: number;
  total?: number;
}

export const initialPagination: IPagination = {
  current_page: 1,
  from: 1,
  last_page: 1,
  per_page: 10,
  to: 1,
  total: 0
};

// export default IPagination;
