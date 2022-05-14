import { Product } from '../types/product';
import { api } from './api';

export const listProductService = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products');

  return response.data;
};

export const listProductByCategoryService = async (
  category: string,
): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/products/category/${category}`);

  return response.data;
};
