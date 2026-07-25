# Publish Record: DigiBouquet AI

- Site: <https://digibouquetai.com>
- Source repo: <https://github.com/bbwdadfg/digibouquetai-site-kit>
- Started: 2026-07-25T17:50:00Z
- Finished: 2026-07-25T18:07:56Z

## Summary

| Status | Count |
| --- | ---: |
| blocked_credentials | 3 |
| blocked_oauth | 1 |
| planned | 14 |
| published | 1 |
| skipped_not_applicable | 10 |
| verified | 2 |

## Published Links

| Platform | Package | Version | Public URL | Verification |
| --- | --- | --- | --- | --- |
| github | `bbwdadfg/digibouquetai-site-kit` | `v0.1.1` | <https://github.com/bbwdadfg/digibouquetai-site-kit> | public repository and v0.1.1 release returned HTTP 200; homepage and topics match target |
| pkg_go_dev | `github.com/bbwdadfg/digibouquetai-site-kit` | `v0.1.1` | <https://pkg.go.dev/github.com/bbwdadfg/digibouquetai-site-kit@v0.1.1> | Go proxy .info and .mod returned HTTP 200; pkg.go.dev returned 404 during initial indexing check |
| npm | `digibouquetai-site-kit` | `0.1.0` | <https://www.npmjs.com/package/digibouquetai-site-kit> | latest is 0.1.0; homepage and repository match; tarball shasum ecb9efdce023cc7be23fb3849dce870e4e52cf7e |

## Blocked Or Manual Steps

| Platform | Status | Reason | Owner |
| --- | --- | --- | --- |
| crates_io_docs_rs | `blocked_credentials` | macOS Keychain service publish-package-backlinks/crates-token is missing | user |
| rubygems | `blocked_credentials` | macOS Keychain service publish-package-backlinks/rubygems-api-key is missing | user |
| jsr | `blocked_oauth` | JSR requires sign-in and first-time scoped package approval before live publish | user |
| hackage | `blocked_credentials` | macOS Keychain service publish-package-backlinks/hackage-token is missing; first upload may also require uploader review | user |

## Failed Platforms

| Platform | Reason | Next action |
| --- | --- | --- |

## Credential Cleanup

- npm: temporary npmrc deleted.
- npm: temporary token variable unset.

## Follow-Up Queue

- pkg_go_dev: Recheck documentation page after Go indexing completes. Owner: agent.
- jsr: Complete JSR sign-in and approve @bbwdadfg/digibouquetai-site-kit in the prepared Orca tab, then rerun live publish. Owner: user.
- crates_io_docs_rs: Add the crates.io token to Keychain before preparing and publishing the Rust crate. Owner: user.
- rubygems: Add the RubyGems API key to Keychain before preparing and publishing the gem. Owner: user.
- hackage: Add a Hackage token and confirm uploader approval before preparing an upload. Owner: user.
