import { api } from './api';

export const listCategoryService = async (): Promise<string[]> => {
  const response = await api.get<string[]>('/products/categories');

  return response.data;
};
