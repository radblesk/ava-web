import { useTranslations } from "next-intl";
import { releaseNotes } from "@/lib/releaseNotes";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Page() {
  const t = useTranslations("releaseNotes");
  return (
    <div className="mx-auto max-w-6xl p-10">
      <h1 className="text-3xl font-bold md:text-4xl">{t("header")}</h1>

      <div className="bg-foreground my-12 h-px w-full mask-x-from-0 sm:my-16"></div>

      {Object.entries(releaseNotes).map(
        ([version, changelog], index, entries) => (
          <div key={version}>
            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[200px_minmax(900px,1fr)_100px]">
              <h2 className="text-2xl md:text-2xl">{version}</h2>

              <article key={version} className="prose dark:prose-invert">
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
                  {changelog}
                </ReactMarkdown>
              </article>
            </div>
            {index < entries.length - 1 && (
              <div className="bg-foreground my-12 h-px w-full mask-x-from-0 sm:my-16"></div>
            )}
          </div>
        ),
      )}
    </div>
  );
}
