// function fn(prop: string): string;
// function fn(prop: number): number;
// function fn(prop: string | number): string | number {
//   if (typeof prop === 'string') {
//     return '123';
//   }
//   return 123;
// }

// const a = fn('123');
// const b = fn(123);

// type propsType<T> = T extends string ? string : number;
// function fn<T extends string | number>(prop: T): propsType<T>;
// function fn(prop: string | number): string | number {
//   if (typeof prop === 'string') {
//     return '123';
//   }
//   return 123;
// }

// const a = fn('123');
// const b = fn(123);

// type ToArray<T> = T extends any ? T[] : never;

// type a = ToArray<string>; // string[]
// type b = ToArray<number>; // number[]
// type c = ToArray<string | number>; // string[] | number[]

// type ToArray2<T> = [T] extends [any] ? T[] : never;
// type d = ToArray2<string | number>; // string[] | number[]

// type GetReturnType<T> = T extends (...args: never[]) => infer ReturnType
//   ? ReturnType
//   : never;

// type fn1 = GetReturnType<() => string>;
// type fn2 = GetReturnType<() => never>;

// type TypeOfMessage<T> = T extends { message: unknown } ? T['message'] : never;
// type MessageType = TypeOfMessage<{ message: string }>;
