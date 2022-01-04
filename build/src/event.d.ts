declare class Event {
    private eventList;
    constructor();
    on(eventName: any, callback: any): this;
    trigger(...args: any[]): this;
    off(key: any, fn: any): this;
}
declare const event: Event;
export default event;
