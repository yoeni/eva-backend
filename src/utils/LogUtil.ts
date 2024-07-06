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

    public log = (data: any): void => {

        const logEvents = [
            {
                message: data,
                timestamp: new Date().getTime(),
            },
        ];

        console.log(logEvents);
    };
}

export default LogUtil;
