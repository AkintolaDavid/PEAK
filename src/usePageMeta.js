import { useEffect } from "react";

const SITE = "PEAK Shipping Agency Limited";

/**
 * Lightweight per-page document title / meta description setter.
 * Avoids pulling in react-helmet for a handful of static routes.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE}` : SITE;
    document.title = fullTitle;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
