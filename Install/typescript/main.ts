// Generics

interface Result {
    a: number;
    b: number;
}
interface FinalResult {
    a: number;
    b: string;
    c: string;
}

class MyData<T extends FinalResult> {
    constructor(public value: T) {}
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}
// var v1 = new MyData<string>("hello");
// console.log(v1.getArray());
// var v2 = new MyData<number>(234);
// console.log(v2.getArray());

// var v3 = new MyData<Result>({a: 32, b: 16});
// console.log(v3.getArray());
var v4 = new MyData<FinalResult>({a: 32, b: "16", c: "hello"});
console.log(v4.getArray());