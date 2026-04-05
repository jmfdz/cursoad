declare module 'bootstrap/js/dist/collapse' {
  export default class Collapse {
    constructor(element: Element, options?: Record<string, unknown>)
    static getOrCreateInstance(element: Element): Collapse
    hide(): void
  }
}
