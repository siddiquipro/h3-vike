// https://vike.dev/data

import type { PageContextServer } from "vike/types";
import fetch from "cross-fetch";

export type Data = Awaited<ReturnType<typeof data>>;

async function getData(pathname: string) {
  try {
    const url = new URL(pathname, "https://jsonplaceholder.typicode.com/");

    const res = await fetch(url.toString());
    const data = await res.json();
    return { data, error: false };
  } catch (error) {
    return { error: true, data: null };
  }
}

export const data = async (pageContext: PageContextServer) => {
  const urlData = pageContext.urlParsed;
  const { data, error } = await getData(urlData.pathname);
  return { path: urlData.pathname, search: urlData.search, name: urlData.pathname.replace("/", ""), data, error };
};
