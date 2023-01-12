export function CustomDecorator(args: any) {
    console.log("Decorator arguments: ", args);

    return function(target: any) {
        Object.defineProperty(target.prototype, 'decoratorValue', {
            value: args.value,
            writable: false
        })
    }
}