import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Jiro Matsumoto | Personal Portfolio - ${pageTitle}`;
  }, [pageTitle]);
};
