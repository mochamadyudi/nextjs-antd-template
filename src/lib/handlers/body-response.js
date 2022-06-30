export default class BodyResponse {
    constructor(props = {}) {
        this.state = {
            ...props,
            error: props?.error ?? true,
            message: props?.message ?? null,
            data: props?.data ?? null
        }
        return this.state
    }
}
