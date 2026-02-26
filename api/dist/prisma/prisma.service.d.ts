import { OnModuleInit, OnModuleDestroy } from "@nestjs/common";
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    private client;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    get user(): import("../generated/prisma/models").UserDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get refreshSession(): import("../generated/prisma/models").RefreshSessionDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get account(): import("../generated/prisma/models").AccountDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get category(): import("../generated/prisma/models").CategoryDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get transaction(): import("../generated/prisma/models").TransactionDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get $transaction(): {
        <P extends import("../generated/prisma/internal/prismaNamespace").PrismaPromise<any>[]>(arg: [...P], options?: {
            isolationLevel?: import("../generated/prisma/internal/prismaNamespace").TransactionIsolationLevel;
        }): import("@prisma/client/runtime/client").JsPromise<import("@prisma/client/runtime/client").UnwrapTuple<P>>;
        <R>(fn: (prisma: Omit<import("../generated/prisma/internal/class").PrismaClient, import("@prisma/client/runtime/client").ITXClientDenyList>) => import("@prisma/client/runtime/client").JsPromise<R>, options?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: import("../generated/prisma/internal/prismaNamespace").TransactionIsolationLevel;
        }): import("@prisma/client/runtime/client").JsPromise<R>;
    };
    get $connect(): () => import("@prisma/client/runtime/client").JsPromise<void>;
    get $disconnect(): () => import("@prisma/client/runtime/client").JsPromise<void>;
}
