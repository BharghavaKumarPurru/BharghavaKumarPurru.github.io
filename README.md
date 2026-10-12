# Portfolio

This Next.js site is exported as static files for GitHub Pages.

## Shared notes setup

The `/notes/` page uses Supabase Auth and Postgres, with email/password and Google sign-in. To enable it:

1. Create a Supabase project and run [`supabase/shared-notes.sql`](supabase/shared-notes.sql) in its SQL Editor.
2. Configure Google OAuth in [Google Cloud Console](https://console.cloud.google.com/apis/credentials): create an OAuth client ID for a web application. Set its authorized redirect URI to `https://<your-project-ref>.supabase.co/auth/v1/callback` (find the exact URL in Supabase Authentication > Providers > Google).
3. In Supabase Authentication > Providers > Google, enable Google and enter the Google client ID and client secret. In Authentication > URL Configuration, add `https://bharghavakumarpurru.github.io/notes/` and `http://localhost:3000/notes/` to the redirect URL allow list.
4. Create exactly two users in Supabase Authentication with the same email addresses as the two Google accounts, then disable public sign-ups. Users sign in with Google using those accounts. Matching verified Google emails can be linked to the existing Supabase users.
5. Add the project URL and public anon key from Supabase Project Settings > API as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in the build environment. The anon key is intended for browser use; never expose the service-role key or Google client secret in the site.
6. For GitHub Pages, add both variables as repository Actions secrets or variables and pass them into the workflow step that runs `pnpm build`.

Both signed-in accounts can read all notes. Row-level security only permits each account to create, update, and delete notes it owns. Without the environment variables, the page displays setup instructions and does not offer a fake/local login.

Run `pnpm build` to create the static site in `out/`.

Deploy the contents of `out/` to GitHub Pages.
