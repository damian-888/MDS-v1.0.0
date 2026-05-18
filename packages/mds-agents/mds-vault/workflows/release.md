---
title: Release
type: workflow
status: stable
source:
  - package.json
  - .changeset/config.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [workflow, release, changesets, npm]
related:
  - "[[index]]"
  - "[[governance/index]]"
  - "[[architecture/build-system]]"
  - "[[architecture/dependency-graph]]"
---

# Release

> Changesets-driven release. Five steps: record changesets → version bump → commit → build → publish. `@mds/agents` and `@mds/guidelines` are private and skipped.

## Summary

Each merged feature/fix adds a changeset file to `.changeset/`. When ready to ship, run `changeset version` to consume those files into version bumps + CHANGELOG entries, then publish.

## Prerequisites

- All changes for this release are merged to `main`.
- Each change has a corresponding changeset file in `.changeset/`.
- npm registry credentials configured (publish target depends on package — `access: "restricted"` per `.changeset/config.json`).

## Steps

### 1. Record bumps (one per change, done at PR time)

```bash
pnpm changeset
```

Interactive: select packages, pick bump (`patch` / `minor` / `major`), write the changelog line. A new markdown file lands in `.changeset/`.

Changesets are recorded as part of PR work — not at release time. Release-time work picks up the accumulated files.

### 2. Version the packages

```bash
pnpm changeset version
```

This:

- Consumes every changeset file in `.changeset/` (except `README.md` and `config.json`).
- Updates the `version` field in each affected `package.json`.
- Updates `peerDependencies` ranges of consumers as needed (`updateInternalDependencies: "patch"` in config).
- Regenerates `CHANGELOG.md` per package.
- Deletes the consumed changeset files.

### 3. Commit the version bumps

```bash
git add .
git commit -m "chore: version packages"
```

(`commit: false` in `.changeset/config.json` — the tool does not auto-commit.)

### 4. Build everything

```bash
pnpm -r --filter @mds/tokens build && \
pnpm -r --filter @mds/icons build && \
pnpm -r --filter @mds/components build && \
pnpm -r --filter @mds/agents build
```

Or use the root convenience script:

```bash
pnpm build
```

Order matters because `@mds/components` depends on `@mds/tokens` + `@mds/icons` at build time. `@mds/guidelines` is private (not published, not in the build chain).

### 5. Publish

```bash
pnpm changeset publish
```

This walks each changed package and runs `npm publish` (respecting `access: "restricted"`). Already-published versions are skipped. Tags are pushed (`v<version>` per published package).

Or use the root convenience script (build + publish in one):

```bash
pnpm release
```

## Verification

```bash
git status                                    # clean working tree
git log --oneline -5                          # the chore: version commit is present
npm view @mds/components version              # matches the new version
npm view @mds/tokens version                  # matches
npm view @mds/icons version                   # matches
```

For each published package, the corresponding `dist/` should be present locally and `CHANGELOG.md` should have the new entry at the top.

## Common Pitfalls

- **Missing changeset:** a PR that should bump a package didn't include `pnpm changeset`. `changeset version` won't bump it. Catch this in PR review or with a CI guard.
- **Pre-built dist out of date:** if you skipped `pnpm build` between `version` and `publish`, the npm tarball ships the previous build. The root `pnpm release` script builds before publishing.
- **Trying to publish `@mds/guidelines` or `@mds/agents`:** both are private. `@mds/guidelines` has `private: true` in its `package.json`. `@mds/agents` is the vault — currently published or not depending on its `private` field; check before assuming.
- **Peer dependency mismatch:** a consumer using `@mds/tokens` as peer must have the published version in its lockfile, not workspace-internal. The `updateInternalDependencies` config handles this for the workspace, but external consumers need a fresh install.
- **`access: "restricted"` registry without auth:** publish fails silently or with auth error. Run `npm whoami` to check credentials.

## Related

- [[index]]
- [[governance/index]]
- [[architecture/build-system]]
- [[architecture/dependency-graph]]
- [[architecture/monorepo]]
- [[dev-loop]]
- [[change-token]]
- [[add-component]]
