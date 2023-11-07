/**
 * @packageDocumentation
 * @module api.functional.query
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { INestQuery } from "../../structures/INestQuery";
import type { IQuery } from "../../structures/IQuery";

/**
 * @controller QueryController.typed
 * @path GET /query/typed
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typed(
    connection: IConnection,
    query: typed.Query,
): Promise<typed.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...typed.METADATA,
            path: typed.path(query),
        } as const,
    );
}
export namespace typed {
    export type Query = Resolved<IQuery>;
    export type Output = Primitive<IQuery>;

    export const METADATA = {
        method: "GET",
        path: "/query/typed",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (query: typed.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/query/typed${encoded.length ? `?${encoded}` : ""}`;;
    }
}

/**
 * @controller QueryController.nest
 * @path GET /query/nest
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function nest(
    connection: IConnection,
    query: nest.Query,
): Promise<nest.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...nest.METADATA,
            path: nest.path(query),
        } as const,
    );
}
export namespace nest {
    export type Query = Resolved<INestQuery>;
    export type Output = Primitive<IQuery>;

    export const METADATA = {
        method: "GET",
        path: "/query/nest",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (query: nest.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/query/nest${encoded.length ? `?${encoded}` : ""}`;;
    }
}

/**
 * @controller QueryController.individual
 * @path GET /query/individual
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function individual(
    connection: IConnection,
    id: string,
): Promise<individual.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...individual.METADATA,
            path: individual.path(id),
        } as const,
    );
}
export namespace individual {
    export type Output = Primitive<string>;

    export const METADATA = {
        method: "GET",
        path: "/query/individual",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string): string => {
        const variables: Record<any, any> = 
        {
            id
        } as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/query/individual${encoded.length ? `?${encoded}` : ""}`;;
    }
}

/**
 * @controller QueryController.composite
 * @path GET /query/composite
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function composite(
    connection: IConnection,
    atomic: string,
    query: composite.Query,
): Promise<composite.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...composite.METADATA,
            path: composite.path(atomic, query),
        } as const,
    );
}
export namespace composite {
    export type Query = Resolved<Omit<IQuery, "atomic">>;
    export type Output = Primitive<IQuery>;

    export const METADATA = {
        method: "GET",
        path: "/query/composite",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (atomic: string, query: composite.Query): string => {
        const variables: Record<any, any> = 
        {
            ...query,
            atomic,
        } as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/query/composite${encoded.length ? `?${encoded}` : ""}`;;
    }
}