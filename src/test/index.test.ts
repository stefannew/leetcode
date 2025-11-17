import { describe, expect, it } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import process from 'node:process';

import {Problem} from '../Problem';

describe('problems', async () => {
    const problems = await setup();

    problems.forEach((problem) => {
      describe(`${problem.number}. ${problem.title}`, () => {
        it(problem.description, () => {
            const testCases = problem.getTestCases();

            testCases.forEach((testCase) => {
                const output = problem.solve(testCase.input);
                expect(output).toEqual(testCase.expected);
            });
        });
      });
    });
});

async function setup() {
    const pathname = path.join(process.cwd(), 'src', 'problems');
    const problems = fs.readdirSync(pathname);

    const problemClasses = [];

    for (const problemDir of problems) {
        const problemPath = path.join(pathname, problemDir, 'index.ts');
        const Problem = (await import(problemPath).then(_problem => _problem.default as new () => Problem<unknown, unknown>));

        problemClasses.push(new Problem());
    }

    return problemClasses;
}