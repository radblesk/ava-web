import ReactMarkdown from "react-markdown";
import { policy } from "@/lib/policy";
import remarkGfm from "remark-gfm";

export default async function Page() {
  return (
    <article className="prose safe-inset-container dark:prose-invert mx-auto max-w-6xl py-10">
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
        {policy}
      </ReactMarkdown>
    </article>
  );
}
