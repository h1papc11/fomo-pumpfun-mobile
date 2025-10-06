
export function* checkUserFunction(action: any): any {
    try {
        console.log("Saga is triggered", action);
    } catch (error) {
    }
}