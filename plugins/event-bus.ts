import mitt from 'mitt';


type ApplicationEvents = {
  'layout:show-sidebar': boolean,
  'auth:password-reset': string
};


export default defineNuxtPlugin((nuxtApp) => {
    const emitter = mitt<ApplicationEvents>()

    return {
      provide: {
        event: emitter.emit, // Will emit an event
        listen: emitter.on // Will register a listener for an event
      }
    }
})
