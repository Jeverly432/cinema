import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice.test", () => {
    const state: CounterSchema = {
        value: 10,
    };
    test("increment", () => {
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });

    test("decrement", () => {
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test("increment", () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
