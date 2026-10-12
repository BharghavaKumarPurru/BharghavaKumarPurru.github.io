create table if not exists public.shared_notes (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  content text not null check (length(trim(content)) > 0),
  created_at timestamptz not null default now()
);

alter table public.shared_notes enable row level security;

grant select, insert, update, delete on public.shared_notes to authenticated;

create policy "Signed-in users can read all shared notes"
  on public.shared_notes for select to authenticated
  using (true);

create policy "Users can create notes for themselves"
  on public.shared_notes for insert to authenticated
  with check (owner_id = (select auth.uid()));

create policy "Users can update their own notes"
  on public.shared_notes for update to authenticated
  using (owner_id = (select auth.uid()))
  with check (owner_id = (select auth.uid()));

create policy "Users can delete their own notes"
  on public.shared_notes for delete to authenticated
  using (owner_id = (select auth.uid()));