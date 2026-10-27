import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getTranslations } from "next-intl/server";
import { fetchReleaseNotes } from "@/lib/fetchReleaseNotes";

export default async function Page() {
  const t = await getTranslations("releaseNotes");
  const releaseNotes = await fetchReleaseNotes();

  return (
    <div className="safe-inset-container mx-auto max-w-6xl p-10">
      <h1 className="text-3xl font-bold md:text-4xl">{t("header")}</h1>

      <div className="bg-foreground my-12 h-px w-full mask-x-from-0 sm:my-16"></div>
      {releaseNotes.map((entry, index) => (
        <div key={entry.file}>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[200px_minmax(0,1fr)]">
            <div className="">
              <h2 className="text-2xl">{entry.version}</h2>
              <h3 className="text-md">build {entry.build}</h3>
            </div>

            <article key={entry.file} className="prose dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 dark:text-orange-500"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {entry.releaseNotes}
              </ReactMarkdown>
            </article>
          </div>
          {index < releaseNotes.length - 1 && (
            <div className="bg-foreground my-12 h-px w-full mask-x-from-0 sm:my-16"></div>
          )}
        </div>
      ))}
    </div>
  );
}
