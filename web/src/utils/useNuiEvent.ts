interface NuiMessage<T = unknown> {
  action: string;
  data: T;
}

/**
 * A function that manage events listeners for receiving data from the client scripts
 * @param action The specific `action` that should be listened for.
 * @param handler The callback function that will handle data relayed by this function
 *
 * @example
 * useNuiEvent<{visibility: true, wasVisible: 'something'}>('setVisible', (data) => {
 *   // whatever logic you want
 * })
 *
 **/

type NuiEventHandler<T = any> = (data: T) => void;

const eventListeners = new Map<string, NuiEventHandler>();

const eventListener = (event: MessageEvent<NuiMessage>) => {
  const { action, data } = event.data;
  const handler = eventListeners.get(action);

  if (handler) handler(data);
};

window.addEventListener("message", eventListener);

export function useNuiEvent<T = unknown>(
  action: string,
  handler: NuiEventHandler<T>
) {
  eventListeners.set(action, handler);
}