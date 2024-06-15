import {isEnvBrowser} from "./misc";

interface DebugEvent {
  action: string;
  data: any;
}

/**
 * Emulates dispatching an event using SendNuiMessage in the lua scripts.
 * This is used when developing in browser
 *
 * @param events - The event you want to cover
 * @param timer - How long until it should trigger (ms)
 */
export const debugData = (events: DebugEvent[], timer = 1000): void => {
  if (isEnvBrowser()) {
    for (const event of events) {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent("message", {
            data: {
              ...event
            },
          })
        );
      }, timer);
    }
  }
};
