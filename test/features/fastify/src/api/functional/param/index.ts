/**
 * @packageDocumentation
 * @module api.functional.param
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

/**
 * @controller TypedParamController.boolean
 * @path GET /param/:value/boolean
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function boolean(
    connection: IConnection,
    value: false | true,
): Promise<boolean.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...boolean.METADATA,
            path: boolean.path(value),
        } as const,
    );
}
export namespace boolean {
    export type Output = Primitive<false | true>;

    export const METADATA = {
        method: "GET",
        path: "/param/:value/boolean",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (value: false | true): string => {
        return `/param/${encodeURIComponent(value ?? "null")}/boolean`;
    }
}

/**
 * @controller TypedParamController.number
 * @path GET /param/:value/number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function number(
    connection: IConnection,
    value: number,
): Promise<number.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...number.METADATA,
            path: number.path(value),
        } as const,
    );
}
export namespace number {
    export type Output = Primitive<number>;

    export const METADATA = {
        method: "GET",
        path: "/param/:value/number",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (value: number): string => {
        return `/param/${encodeURIComponent(value ?? "null")}/number`;
    }
}

/**
 * @controller TypedParamController.string
 * @path GET /param/:value/string
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function string(
    connection: IConnection,
    value: string,
): Promise<string.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...string.METADATA,
            path: string.path(value),
        } as const,
    );
}
export namespace string {
    export type Output = Primitive<string>;

    export const METADATA = {
        method: "GET",
        path: "/param/:value/string",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (value: string): string => {
        return `/param/${encodeURIComponent(value ?? "null")}/string`;
    }
}

/**
 * @controller TypedParamController.nullable
 * @path GET /param/:value/nullable
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function nullable(
    connection: IConnection,
    value: null | string,
): Promise<nullable.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...nullable.METADATA,
            path: nullable.path(value),
        } as const,
    );
}
export namespace nullable {
    export type Output = Primitive<null | string>;

    export const METADATA = {
        method: "GET",
        path: "/param/:value/nullable",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (value: null | string): string => {
        return `/param/${encodeURIComponent(value ?? "null")}/nullable`;
    }
}

/**
 * @controller TypedParamController.literal
 * @path GET /param/:value/literal
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function literal(
    connection: IConnection,
    value: "A" | "B" | "C",
): Promise<literal.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...literal.METADATA,
            path: literal.path(value),
        } as const,
    );
}
export namespace literal {
    export type Output = Primitive<"A" | "B" | "C">;

    export const METADATA = {
        method: "GET",
        path: "/param/:value/literal",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (value: "A" | "B" | "C"): string => {
        return `/param/${encodeURIComponent(value ?? "null")}/literal`;
    }
}