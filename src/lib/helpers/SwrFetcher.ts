export const SwrFetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
