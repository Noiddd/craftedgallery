# Supabase + TanStack Query Setup

This project uses Supabase for the database and TanStack Query (React Query) for data fetching and caching.

## Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Copy environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```

3. **Add your Supabase credentials** to `.env.local`:
   - Get your project URL and anon key from your Supabase project settings
   - Navigate to: https://app.supabase.com/project/_/settings/api

## Usage Examples

### Fetching Data

```tsx
'use client';

import { useItems } from '@/lib/hooks/useSupabaseQuery';

export function MyComponent() {
  const { data, isLoading, error } = useItems('crafts');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### Fetching a Single Item

```tsx
'use client';

import { useItem } from '@/lib/hooks/useSupabaseQuery';

export function CraftDetail({ id }: { id: string }) {
  const { data, isLoading, error } = useItem('crafts', id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Not found</div>;

  return <div>{data.name}</div>;
}
```

### Creating Data

```tsx
'use client';

import { useCreateItem } from '@/lib/hooks/useSupabaseQuery';

export function CreateForm() {
  const createItem = useCreateItem('crafts');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await createItem.mutateAsync({
      name: formData.get('name'),
      description: formData.get('description'),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required />
      <textarea name="description" />
      <button type="submit" disabled={createItem.isPending}>
        {createItem.isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
}
```

### Updating Data

```tsx
'use client';

import { useUpdateItem } from '@/lib/hooks/useSupabaseQuery';

export function UpdateButton({ id }: { id: string }) {
  const updateItem = useUpdateItem('crafts');

  const handleUpdate = async () => {
    await updateItem.mutateAsync({
      id,
      updates: { featured: true },
    });
  };

  return (
    <button onClick={handleUpdate} disabled={updateItem.isPending}>
      {updateItem.isPending ? 'Updating...' : 'Mark as Featured'}
    </button>
  );
}
```

### Deleting Data

```tsx
'use client';

import { useDeleteItem } from '@/lib/hooks/useSupabaseQuery';

export function DeleteButton({ id }: { id: string }) {
  const deleteItem = useDeleteItem('crafts');

  const handleDelete = async () => {
    if (confirm('Are you sure?')) {
      await deleteItem.mutateAsync(id);
    }
  };

  return (
    <button onClick={handleDelete} disabled={deleteItem.isPending}>
      {deleteItem.isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
```

## Custom Queries

For more complex queries, create custom hooks:

```tsx
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase/client';

export function useFeaturedCrafts() {
  return useQuery({
    queryKey: ['crafts', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('crafts')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      return data;
    },
  });
}
```

## Direct Supabase Client Usage

You can also use the Supabase client directly:

```tsx
import { supabase } from '@/lib/supabase/client';

// Query
const { data, error } = await supabase
  .from('crafts')
  .select('*')
  .eq('id', id);

// Insert
const { data, error } = await supabase
  .from('crafts')
  .insert({ name: 'New Craft' });

// Update
const { data, error } = await supabase
  .from('crafts')
  .update({ name: 'Updated Name' })
  .eq('id', id);

// Delete
const { error } = await supabase
  .from('crafts')
  .delete()
  .eq('id', id);
```

## TanStack Query Features

The QueryProvider is configured with:
- **Stale time**: 1 minute (queries stay fresh for 60 seconds)
- **Refetch on window focus**: Disabled (prevents unnecessary refetches)

You can customize these settings in `app/providers/QueryProvider.tsx`.
