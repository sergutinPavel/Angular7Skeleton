export interface ISorting {
  orderBy?: string;
  order?: 'asc' | 'desc';
  page?: number;
  count?: any;
  [name: string]: any;
}

export interface IFilterParams {
  sorting?: ISorting;
  filters?: {[name: string]: string};
}

export const initialSorting: ISorting = {
  orderBy: 'id',
  order: 'asc',
  page: 1,
  count: 10
};
