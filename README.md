# Moneykeeper Workspace

Монорепо-каркас для сервисов проекта:

- `api` — backend API (будущий NestJS + Prisma + SQLite)
- `ui` — Mini App frontend (будущий React + Vite)
- `bot` — Telegram bot (будущий grammY)
- `scheduler` — scheduler/cron trigger для внутренних job endpoints

## Baseline requirements

- Node.js `>=20`
- pnpm `>=10`

Проверка версий:

```bash
node -v
pnpm -v
```

## Local setup (<=15 минут)

1. Установите Node 20+ и pnpm 10+
2. Скопируйте env-шаблон:

```bash
cp .env.example .env
```

3. Установите зависимости:

```bash
pnpm install
```

## Baseline commands

- Install: `pnpm install`
- Lint all: `pnpm lint`
- Format check all: `pnpm format:check`
- Build all: `pnpm build`
- Test all: `pnpm test`
- Full quality gate: `pnpm quality`
- Run all (parallel): `pnpm dev`

На этапе foundation сервисы запускают placeholder entrypoint и печатают bootstrap-сообщения.

## Engineering conventions

Единые правила по линтингу, форматированию, коммитам, ветвлению и naming: `CONVENTIONS.md`.
