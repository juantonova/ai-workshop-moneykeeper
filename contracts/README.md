# @expense/contracts

TypeScript API client, generated from `api/openapi/openapi.json`.

## Generation flow

1. `api` updates OpenAPI source (`api/openapi/openapi.source.json`) and generates artifact (`pnpm --filter @moneykeeper/api run codegen:openapi`)
2. `contracts` regenerates typed fetch client (`pnpm --filter @expense/contracts run codegen:client`)
3. `contracts` builds distributable artifacts into `dist/`

## Usage

```ts
import { OpenAPI, TransactionsService } from "@expense/contracts";

OpenAPI.BASE = "https://example.com/api/v1";
const response = await TransactionsService.createTransaction({
  requestBody: {
    type: "EXPENSE",
    amount: 1200,
    accountId: 1,
    occurredAtUtc: new Date().toISOString(),
  },
});
```

## Versioning policy (SemVer)

- `MAJOR`: breaking contract changes (removed endpoint, incompatible DTO changes)
- `MINOR`: backward-compatible API additions
- `PATCH`: non-breaking fixes (descriptions/examples/docs-only changes)

Breaking changes must follow the Interfaces Freeze ADR from `TECHSPEC.md`.

CI can derive a deterministic patch version from `GITHUB_RUN_NUMBER`, and local overrides are supported via `CONTRACTS_VERSION`.
