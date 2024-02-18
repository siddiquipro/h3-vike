// https://vike.dev/data

import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  const urlData = pageContext.urlParsed;
  return { path: urlData.pathname, search: urlData.search };
};
