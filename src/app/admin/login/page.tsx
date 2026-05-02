import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | Kaos Muay Thai",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          <span className="text-red-600">Kaos</span> Admin
        </h1>
        <p className="text-sm text-white/60 mb-8">Sign in to view founder applications.</p>

        <form method="POST" action="/api/admin/login" className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-xs uppercase tracking-wider text-white/70 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              autoFocus
              className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
          </div>

          {error ? (
            <p role="alert" className="text-sm text-red-500">
              Incorrect password. Try again.
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-md bg-red-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
