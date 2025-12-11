import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase/client';

// Example: Fetch all items from a table
export function useItems(tableName: string) {
  return useQuery({
    queryKey: ['items', tableName],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(tableName)
        .select('*');

      if (error) throw error;
      return data;
    },
  });
}

// Example: Fetch a single item by ID
export function useItem(tableName: string, id: string | null) {
  return useQuery({
    queryKey: ['item', tableName, id],
    queryFn: async () => {
      if (!id) return null;

      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });
}

// Example: Create a new item
export function useCreateItem(tableName: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newItem: Record<string, unknown>) => {
      const { data, error } = await supabase
        .from(tableName)
        .insert(newItem)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items', tableName] });
    },
  });
}

// Example: Update an item
export function useUpdateItem(tableName: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Record<string, unknown> }) => {
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['items', tableName] });
      queryClient.invalidateQueries({ queryKey: ['item', tableName, variables.id] });
    },
  });
}

// Example: Delete an item
export function useDeleteItem(tableName: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items', tableName] });
    },
  });
}
