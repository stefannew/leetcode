export abstract class Problem<TInput, TOutput> {
    protected constructor(
        public readonly number: number,
        public readonly title: string,
        public readonly description: string
    ) {}

    abstract solve(input: TInput): TOutput;

    abstract getTestCases(): Array<{ input: TInput, expected: TOutput }>;
}