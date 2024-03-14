import Pusher from 'pusher-js';

const pusher = new Pusher('app_1_key', {
    cluster: "mt3",
    disableStats: true,
    forceTLS: false,
    wsHost: "localhost",
    wssPort: 6001,
    wsPort: 6001,
    enabledTransports: ['ws', 'wss'],
});

export default pusher;