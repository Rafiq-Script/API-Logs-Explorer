/**
 * API integration example.
 *
 * This file is not used by the application: all code below is commented out,
 * so the template makes no network requests. When you need an integration,
 * copy this file as `src/api.ts`, uncomment the code, and adapt the types
 * and response mapping to your server's format.
 */

// export type ApiLogEntry = {
//   id: string;
//   status: string;
//   createdAt: string;
//   message?: string;
// };
//
// export async function getApiLogs(): Promise<ApiLogEntry[]> {
//   const response = await fetch(import.meta.env.VITE_API_URL, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       // Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
//     },
//   });
//
//   if (!response.ok) {
//     throw new Error(`API returned HTTP ${response.status}`);
//   }
//
//   const payload = (await response.json()) as { items?: ApiLogEntry[] };
//   return payload.items ?? [];
// }
//
// // Usage in App.tsx:
// // const [logs, setLogs] = useState<ApiLogEntry[]>([]);
// // useEffect(() => {
// //   void getApiLogs().then(setLogs).catch(console.error);
// // }, []);
