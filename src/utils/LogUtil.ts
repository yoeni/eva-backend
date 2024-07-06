class LogUtil {
    private static instance: LogUtil;

    private constructor() {
    }

    public static getInstance(): LogUtil {
        if (!this.instance) {
            this.instance = new LogUtil();
        }
        return this.instance;
    }

    public log = (message: string): void => {

        const logEvents = [
            {
                message: message,
                timestamp: new Date().getTime(),
            },
        ];

        console.log(logEvents);
    };
}

export default LogUtil;
