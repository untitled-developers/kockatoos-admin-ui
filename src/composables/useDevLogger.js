export default function useDevLogger() {
    const consoleDevLog = (...args) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(...args);
        }
    };

    return {
        consoleDevLog
    };
}