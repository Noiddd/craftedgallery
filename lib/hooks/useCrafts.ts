import { useQuery } from '@tanstack/react-query';
import { getCrafts, getCraft } from '@/lib/api/crafts';

export function useCrafts(filters?: {
  categories?: string[];
  view?: "all" | "new";
}) {
  return useQuery({
    queryKey: ['crafts', filters],
    queryFn: () => getCrafts(filters),
  });
}

export function useCraft(id: string | null) {
  return useQuery({
    queryKey: ['craft', id],
    queryFn: () => {
      if (!id) return null;
      return getCraft(id);
    },
    enabled: !!id,
  });
}

