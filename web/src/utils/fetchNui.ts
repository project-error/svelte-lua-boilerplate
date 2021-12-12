export async function fetchNui<T = any>(
  eventName: string,
  data: unknown = {},
  ): Promise<T> {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  const resourceName = (window as any).GetParentResourceName();

  const resp = await fetch(`https://${resourceName}/${eventName}`, options);

  return await resp.json();
}