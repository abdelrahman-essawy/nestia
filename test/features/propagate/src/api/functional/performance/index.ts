/**
 * @packageDocumentation
 * @module api.functional.performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, IPropagation } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { IPerformance } from "../../structures/IPerformance";

/**
 * @controller PerformanceController.get
 * @path GET /performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
): Promise<get.Output> {
    return PlainFetcher.propagate(
        connection,
        {
            ...get.METADATA,
            path: get.path(),
        } as const,
    );
}
export namespace get {
    export type Output = IPropagation<{
        200: IPerformance;
    }>;

    export const METADATA = {
        method: "GET",
        path: "/performance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/performance`;
    }
}