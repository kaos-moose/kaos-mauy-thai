import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { dynamo, FOUNDERS_TABLE, type FounderRecord } from "@/lib/dynamo";

// Route is dynamic — always pull fresh records on each request.
export const dynamic = "force-dynamic";

const membershipLabels: Record<string, string> = {
  "muay-thai": "Muay Thai Only",
  "krav-maga": "Krav Maga Only",
  "full-access": "Full Access (Both)",
};

function formatMountainTime(iso: string): string {
  try {
    return new Date(iso).toLocaleString("en-US", {
      timeZone: "America/Denver",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

async function listFounders(): Promise<{ items: FounderRecord[]; error: string | null }> {
  try {
    const result = await dynamo.send(new ScanCommand({ TableName: FOUNDERS_TABLE }));
    const items = (result.Items ?? []) as FounderRecord[];
    items.sort((a, b) =>
      a.submittedAt < b.submittedAt ? 1 : a.submittedAt > b.submittedAt ? -1 : 0
    );
    return { items, error: null };
  } catch (err) {
    console.error("DynamoDB Scan failed:", err);
    return { items: [], error: err instanceof Error ? err.message : "Unknown error" };
  }
}

export default async function AdminFoundersPage() {
  const { items, error } = await listFounders();

  return (
    <main className="px-6 py-8 md:px-10">
      <header className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-red-600">Kaos</span> Founder Applications
          </h1>
          <p className="text-sm text-white/60 mt-1">
            {error ? "Unable to load applications." : `${items.length} total`}
          </p>
        </div>
      </header>

      {error ? (
        <div
          role="alert"
          className="rounded-md border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-300"
        >
          {error}
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-md border border-white/10 bg-white/5 px-4 py-8 text-center text-sm text-white/60">
          No applications yet.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-md border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-white/70">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Name</th>
                <th scope="col" className="px-4 py-3 font-semibold">Email</th>
                <th scope="col" className="px-4 py-3 font-semibold">Phone</th>
                <th scope="col" className="px-4 py-3 font-semibold">Membership</th>
                <th scope="col" className="px-4 py-3 font-semibold">Why Join</th>
                <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {items.map((f) => (
                <tr key={f.id} className="align-top">
                  <td className="px-4 py-3 whitespace-nowrap">
                    {f.firstName} {f.lastName}
                  </td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${f.email}`} className="text-red-400 hover:text-red-300 underline-offset-2 hover:underline">
                      {f.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <a href={`tel:${f.phone}`} className="text-white/90 hover:text-white">
                      {f.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {membershipLabels[f.membershipInterest] ?? f.membershipInterest}
                  </td>
                  <td className="px-4 py-3">
                    <div
                      className="max-w-md truncate text-white/80"
                      title={f.whyJoin || undefined}
                    >
                      {f.whyJoin || <span className="text-white/40">—</span>}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-white/70">
                    {formatMountainTime(f.submittedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
