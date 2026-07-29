import { writeFileSync } from 'node:fs';

const checkedAt = '2026-07-26T03:12:11Z';
const refreshedAt = '2026-07-29T12:36:31Z';
const repositoryUrl =
  'https://github.com/bbwdadfg/digibouquetai-site-kit';

function platform({
  platform: name,
  status = 'planned',
  artifactType,
  automationLevel,
  packageName = '',
  version = '',
  publicUrl = '',
  links = [],
  credentialStatus = 'not_checked',
  blockedReason = '',
  verificationMethod = 'not_run',
  verificationResult = 'not verified',
  verificationCheckedAt = checkedAt,
  cleanup = [],
  notes = [],
}) {
  return {
    platform: name,
    status,
    artifact_type: artifactType,
    automation_level: automationLevel,
    package: packageName,
    version,
    public_url: publicUrl,
    repository_url: repositoryUrl,
    link_surfaces_verified: links,
    credential_status: credentialStatus,
    blocked_reason: blockedReason,
    verification: {
      method: verificationMethod,
      result: verificationResult,
      checked_at: verificationMethod === 'not_run' ? '' : verificationCheckedAt,
    },
    cleanup,
    notes,
  };
}

const record = {
  schema_version: '1.0',
  target: {
    site: 'https://digibouquetai.com',
    brand: 'DigiBouquet AI',
    site_type: 'AI digital gift web application',
    slug_hyphen: 'digibouquetai-site-kit',
    slug_underscore: 'digibouquetai_site_kit',
    source_repo: repositoryUrl,
    useful_urls: [
      'https://digibouquetai.com',
      'https://digibouquetai.com/create-bouquet',
      'https://digibouquetai.com/ai-card',
      'https://digibouquetai.com/bouquet-examples',
      'https://digibouquetai.com/guides',
      'https://digibouquetai.com/pricing',
    ],
    run_started_at: '2026-07-25T17:50:00Z',
    run_finished_at: checkedAt,
  },
  platforms: [
    platform({
      platform: 'github',
      status: 'verified',
      artifactType: 'source_repository',
      automationLevel: 'automated',
      packageName: 'bbwdadfg/digibouquetai-site-kit',
      version: 'v0.1.1',
      publicUrl: repositoryUrl,
      links: [
        'README.md',
        'repository_homepage',
        'topics',
        'release',
        'license',
      ],
      credentialStatus: 'gh_authenticated_session_used',
      verificationMethod: 'github_api_and_public_http',
      verificationResult:
        'public repository and v0.1.1 release returned HTTP 200; homepage and topics match target',
      notes: ['Source commits c929615 and 2af1e47; tags v0.1.0 and v0.1.1.'],
    }),
    platform({
      platform: 'pkg_go_dev',
      status: 'verified',
      artifactType: 'go_module',
      automationLevel: 'automated_after_git_tag',
      packageName: 'github.com/bbwdadfg/digibouquetai-site-kit',
      version: 'v0.1.1',
      publicUrl:
        'https://pkg.go.dev/github.com/bbwdadfg/digibouquetai-site-kit@v0.1.1',
      links: ['source_repository', 'go_module'],
      credentialStatus: 'not_required',
      verificationMethod: 'go_proxy_and_pkg_go_dev_http',
      verificationResult:
        'Go proxy .info and .mod and the pkg.go.dev v0.1.1 documentation page returned HTTP 200',
      notes: ['Local go test coverage: 91.7%.'],
    }),
    platform({
      platform: 'packagist',
      status: 'verified',
      artifactType: 'composer_package',
      automationLevel: 'semi_auto',
      packageName: 'bbwdadfg/digibouquetai-site-kit',
      version: 'v0.1.2',
      publicUrl:
        'https://packagist.org/packages/bbwdadfg/digibouquetai-site-kit',
      links: ['package_homepage', 'repository', 'README.md'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'packagist_api_and_public_http',
      verificationResult:
        'official API returned HTTP 202 and the public package page and metadata API returned HTTP 200 with stable version v0.1.2',
      cleanup: ['temporary token variable unset'],
      notes: ['Composer metadata exposes the DigiBouquet AI homepage and source repository.'],
    }),
    platform({
      platform: 'crates_io_docs_rs',
      status: 'verified',
      artifactType: 'rust_crate',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl: 'https://crates.io/crates/digibouquetai-site-kit',
      links: ['crate_homepage', 'repository', 'README.md', 'docs_rs'],
      credentialStatus: 'trusted_cargo_store_used',
      verificationMethod: 'crates_sparse_index_and_docs_rs_http',
      verificationResult:
        'crates.io sparse index lists 0.1.0 and the docs.rs latest documentation page returned HTTP 200',
      notes: [
        'cargo test, cargo package, and cargo publish --dry-run passed.',
        'A minimal 0.1.1 update was rejected with HTTP 403 because the stored token lacks the required permission; 0.1.0 remains verified.',
      ],
    }),
    platform({
      platform: 'rubygems',
      status: 'verified',
      artifactType: 'ruby_gem',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl: 'https://rubygems.org/gems/digibouquetai-site-kit',
      links: ['gem_homepage', 'source_code', 'README.md'],
      credentialStatus: 'trusted_rubygems_store_used',
      verificationMethod: 'rubygems_api_and_public_http',
      verificationResult:
        'RubyGems API and public package page returned HTTP 200 for 0.1.0 with the DigiBouquet AI homepage and source repository',
      notes: ['Ruby tests and gem build passed before publication.'],
    }),
    platform({
      platform: 'npm',
      status: 'verified',
      artifactType: 'javascript_package',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl:
        'https://www.npmjs.com/package/digibouquetai-site-kit',
      links: ['package_homepage', 'repository', 'README.md', 'registry_metadata'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'npm_registry_json',
      verificationResult:
        'latest is 0.1.0; homepage and repository match; tarball shasum ecb9efdce023cc7be23fb3849dce870e4e52cf7e',
      cleanup: ['temporary npmrc deleted', 'temporary token variable unset'],
      notes: [
        'npm test passed 4/4 with 100% line, branch, and function coverage.',
        'npm pack dry-run contained only LICENSE, README.md, index.d.ts, index.js, and package.json.',
        'npmjs.com HTML returned 403 from automated HTTP, so authoritative registry JSON was used.',
      ],
    }),
    platform({
      platform: 'pypi',
      status: 'verified',
      artifactType: 'python_package',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl: 'https://pypi.org/project/digibouquetai-site-kit/',
      links: ['project_homepage', 'source_repository', 'README.md'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'pypi_json_api',
      verificationResult:
        'PyPI JSON API returned HTTP 200 for 0.1.0 with homepage and source repository metadata',
      cleanup: ['temporary token variable unset'],
      notes: ['Python unit tests passed and uv built the wheel and source distribution.'],
    }),
    platform({
      platform: 'pub_dev',
      status: 'verified',
      artifactType: 'dart_package',
      automationLevel: 'semi_auto_oauth',
      packageName: 'digibouquetai_site_kit',
      version: '0.1.0',
      publicUrl: 'https://pub.dev/packages/digibouquetai_site_kit',
      links: ['package_homepage', 'repository', 'README.md'],
      credentialStatus: 'existing_dart_oauth_session_used',
      verificationMethod: 'pub_dev_api_and_public_http',
      verificationResult:
        'pub.dev API and public package page returned HTTP 200 with latest version 0.1.0',
      notes: ['Dart tests passed and strict publish dry-run completed with zero warnings.'],
    }),
    platform({
      platform: 'hex_hexdocs',
      status: 'verified',
      artifactType: 'elixir_package',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai_site_kit',
      version: '0.1.0',
      publicUrl: 'https://hex.pm/packages/digibouquetai_site_kit',
      links: ['package_homepage', 'repository', 'README.md', 'hexdocs'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'hex_api_and_hexdocs_http',
      verificationResult:
        'Hex API returned HTTP 200 with latest version 0.1.0 and HexDocs returned HTTP 200',
      cleanup: ['temporary token variable unset'],
      notes: ['Mix tests and mix hex.build passed before publication.'],
    }),
    platform({
      platform: 'clojars',
      status: 'verified',
      artifactType: 'maven_artifact',
      automationLevel: 'automated_with_token',
      packageName: 'net.clojars.tianwei/digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl:
        'https://clojars.org/net.clojars.tianwei/digibouquetai-site-kit',
      links: ['package_page', 'pom_homepage', 'scm_repository'],
      credentialStatus: 'keychain_credentials_used',
      verificationMethod: 'clojars_public_http_and_pom',
      verificationResult:
        'Clojars package page and published POM returned HTTP 200; POM contains the DigiBouquet AI homepage and source repository',
      cleanup: ['temporary Maven settings deleted'],
      notes: ['Java tests passed and jar, sources, javadocs, and POM were deployed.'],
    }),
    platform({
      platform: 'docker_hub',
      status: 'verified',
      artifactType: 'oci_image',
      automationLevel: 'automated_with_token_or_api',
      packageName: 'baiwei111/digibouquetai-site-kit',
      version: '0.1.0, latest',
      publicUrl: 'https://hub.docker.com/r/baiwei111/digibouquetai-site-kit',
      links: ['repository_overview', 'image_labels', 'source_repository'],
      credentialStatus: 'keychain_credentials_used',
      verificationMethod: 'anonymous_registry_v2_manifest',
      verificationResult:
        'anonymous registry pulls for 0.1.0 and latest returned HTTP 200; manifest digest sha256:375cd877517a457bf614a5b47d163d8c1e51f5e671a07e5e121786bf201ac8dc',
      cleanup: ['temporary token variables unset'],
      notes: ['Docker Hub registry API was reached through the documented DNS-over-HTTPS fallback after local TLS/DNS failure.'],
    }),
    platform({
      platform: 'jsr',
      status: 'verified',
      artifactType: 'typescript_package',
      automationLevel: 'semi_auto',
      packageName: '@bbwdadfg/digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl: 'https://jsr.io/@bbwdadfg/digibouquetai-site-kit',
      links: ['README.md', 'package_page', 'version_page', 'repository'],
      credentialStatus: 'interactive_browser_auth_used',
      verificationMethod: 'public_page_registry_metadata_and_readme',
      verificationResult:
        'package and version pages returned HTTP 200; registry latest is 0.1.0; published README contains the DigiBouquet AI homepage and product links',
      notes: [
        'Deno check passed and mod_test.ts passed 1/1.',
        'JSR dry-run passed with only LICENSE, README.md, jsr.json, and mod.ts.',
        'First-time authorization used only the Orca embedded browser; no external browser was used.',
      ],
    }),
    platform({
      platform: 'maven_central_javadoc',
      status: 'verified',
      artifactType: 'java_library',
      automationLevel: 'semi_auto_signed',
      packageName: 'io.github.bbwdadfg:digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl:
        'https://central.sonatype.com/artifact/io.github.bbwdadfg/digibouquetai-site-kit',
      links: ['central_portal_page', 'pom_metadata', 'javadoc_io'],
      credentialStatus: 'keychain_credentials_and_gpg_key_used',
      verificationMethod: 'central_public_page_and_repo1_http',
      verificationResult:
        'Central artifact page and repo1.maven.org POM and JAR returned HTTP 200 for version 0.1.0',
      verificationCheckedAt: refreshedAt,
      cleanup: ['temporary Maven settings deleted', 'temporary credential variables unset'],
      notes: ['Deployment fb2ffde1-a765-4b8e-b0b9-c1515aafb5dc was validated and published.'],
    }),
    platform({
      platform: 'nuget',
      status: 'verified',
      artifactType: 'dotnet_package',
      automationLevel: 'automated_with_token',
      packageName: 'DigiBouquetAISiteKit',
      version: '0.1.0',
      publicUrl: 'https://www.nuget.org/packages/DigiBouquetAISiteKit',
      links: ['package_homepage', 'repository', 'README.md', 'registry_metadata'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'nuget_flat_container_api_and_public_http',
      verificationResult:
        'NuGet flat-container API returned HTTP 200 and lists version 0.1.0; public package page returned HTTP 200',
      cleanup: ['temporary API key variable unset'],
      notes: ['dotnet tests passed 2/2 and dotnet pack completed before publication.'],
    }),
    platform({
      platform: 'cocoapods',
      status: 'verified',
      artifactType: 'ios_macos_pod',
      automationLevel: 'semi_auto_with_trunk_auth',
      packageName: 'DigibouquetaiSiteKit',
      version: '0.1.0',
      publicUrl: 'https://cocoapods.org/pods/DigibouquetaiSiteKit',
      links: ['pod_homepage', 'source_repository', 'podspec'],
      credentialStatus: 'keychain_trunk_session_used_by_github_actions',
      verificationMethod: 'pod_trunk_info_public_http_and_ci',
      verificationResult:
        'pod trunk info lists 0.1.0, public pod page returned HTTP 200, and GitHub Actions lint/publish run 30185249269 succeeded',
      notes: [
        'Swift source compiled locally; local XCTest was unavailable in the installed command-line toolchain.',
        'Full CocoaPods lint and trunk publication succeeded on GitHub Actions macOS.',
      ],
    }),
    platform({
      platform: 'luarocks',
      status: 'verified',
      artifactType: 'lua_module',
      automationLevel: 'automated_with_token',
      packageName: 'bbwdadfg/digibouquetai-site-kit',
      version: '0.1.0-1',
      publicUrl:
        'https://luarocks.org/modules/bbwdadfg/digibouquetai-site-kit',
      links: ['module_homepage', 'source_repository', 'rockspec'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'luarocks_public_http',
      verificationResult:
        'LuaRocks module page returned HTTP 200 and lists version 0.1.0-1 with the DigiBouquet AI homepage',
      cleanup: ['temporary API key variable unset'],
      notes: ['Lua tests, luarocks lint, and luarocks pack passed before publication.'],
    }),
    platform({
      platform: 'cpan_metacpan',
      status: 'blocked_credentials',
      artifactType: 'perl_distribution',
      automationLevel: 'automated_with_pause_account',
      packageName: 'DigiBouquetAI-SiteKit',
      publicUrl: 'https://metacpan.org/dist/DigiBouquetAI-SiteKit',
      credentialStatus: 'keychain_credentials_rejected',
      blockedReason: 'Stored PAUSE credentials returned HTTP 401 Unauthorized',
      notes: [
        'Perl distribution built successfully and all 7 tests passed.',
        'Refresh the PAUSE credentials in Keychain before retrying the upload.',
      ],
    }),
    platform({
      platform: 'hackage',
      status: 'blocked_credentials',
      artifactType: 'haskell_package',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai-site-kit',
      publicUrl: 'https://hackage.haskell.org/package/digibouquetai-site-kit',
      credentialStatus: 'keychain_item_missing',
      blockedReason:
        'macOS Keychain service publish-package-backlinks/hackage-token is missing; first upload may also require uploader review',
      notes: ['Registry HTTP check confirmed the candidate name was available.'],
    }),
    platform({
      platform: 'chocolatey',
      status: 'submitted',
      artifactType: 'windows_package',
      automationLevel: 'semi_auto_review',
      packageName: 'digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl:
        'https://community.chocolatey.org/packages/digibouquetai-site-kit',
      links: ['package_homepage', 'repository', 'package_page'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'chocolatey_public_package_page',
      verificationResult:
        'public package page returned HTTP 200; validator, package testing, and virus scanning checks passed; human moderation remains pending',
      verificationCheckedAt: refreshedAt,
      cleanup: ['temporary API key variable unset'],
      notes: ['The nupkg was built and submitted; no package changes are currently requested.'],
    }),
    platform({
      platform: 'github_packages',
      status: 'verified',
      artifactType: 'github_package',
      automationLevel: 'automated_with_token',
      packageName: '@bbwdadfg/digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl:
        'https://github.com/bbwdadfg/digibouquetai-site-kit/pkgs/npm/digibouquetai-site-kit',
      links: ['public_package_page', 'repository'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'github_packages_api_and_public_http',
      verificationResult:
        'package visibility was changed to public in Orca and the unauthenticated package URL returned HTTP 200',
      verificationCheckedAt: refreshedAt,
      cleanup: ['temporary npmrc deleted', 'temporary token variable unset'],
      notes: ['Version 0.1.0 remains linked to the public source repository.'],
    }),
    platform({
      platform: 'gitlab_packages',
      status: 'verified',
      artifactType: 'gitlab_package',
      automationLevel: 'automated_with_token_or_ci',
      packageName: 'digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl:
        'https://gitlab.com/baiwei.chu/digibouquetai-site-kit/-/packages',
      links: ['public_project', 'package_registry', 'README.md', 'artifact'],
      credentialStatus: 'keychain_token_used',
      verificationMethod: 'gitlab_public_api_and_artifact_checksum',
      verificationResult:
        'public project and packages API returned HTTP 200; unauthenticated artifact download SHA-256 matched 7b3f3facd40b3b14df70c4448b862c10bc916054c64a4fb56c85c85d61248e92',
      cleanup: ['temporary token variable unset'],
      notes: ['Public GitLab project 84814708 includes a backlink-bearing README and the Generic Package Registry artifact.'],
    }),
    ...[
      ['terraform_registry', 'terraform_module', 'semi_auto', 'No infrastructure or self-hosting use case.'],
      ['helm_artifact_hub', 'helm_chart', 'semi_auto', 'No Kubernetes or self-hosted deployment use case.'],
      ['ansible_galaxy', 'ansible_collection_or_role', 'automated_with_token', 'No system automation or deployment use case.'],
      ['open_vsx', 'vscode_compatible_extension', 'semi_auto_review', 'No natural editor or developer-tool workflow.'],
      ['wordpress_plugin_directory', 'wordpress_plugin', 'manual_review', 'No real WordPress integration was identified.'],
      ['aur', 'arch_package', 'manual_git_ssh', 'No real Arch CLI or desktop application exists.'],
      ['conda_forge', 'conda_recipe', 'pr_review', 'Generic site helper has no scientific or conda-specific value.'],
      ['cran', 'r_package', 'manual_review', 'No real R utility exists.'],
      ['flathub', 'desktop_app', 'pr_review', 'DigiBouquet AI is a web app, not a desktop application.'],
      ['homebrew', 'formula_or_cask', 'pr_review', 'No substantive CLI or desktop application exists.'],
    ].map(([name, artifactType, automationLevel, reason]) =>
      platform({
        platform: name,
        status: 'skipped_not_applicable',
        artifactType,
        automationLevel,
        credentialStatus: 'not_applicable',
        blockedReason: reason,
        notes: [reason],
      }),
    ),
  ],
  follow_up: [
    {
      platform: 'cpan_metacpan',
      reason:
        'Replace the rejected PAUSE credentials in Keychain, then rerun the CPAN upload.',
      owner: 'user',
    },
    {
      platform: 'chocolatey',
      reason:
        'Wait for Chocolatey automated validation, verification, and scan review.',
      owner: 'platform',
    },
    {
      platform: 'hackage',
      reason:
        'Add a Hackage token and confirm uploader approval before preparing an upload.',
      owner: 'user',
    },
  ],
};

writeFileSync('publish-record.json', `${JSON.stringify(record, null, 2)}\n`);

function csvCell(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const csvHeader = [
  'site',
  'platform',
  'status',
  'package',
  'version',
  'public_url',
  'verification_method',
  'verification_result',
  'credential_status',
  'blocked_reason',
  'notes',
];
const csvRows = record.platforms.map((entry) => [
  record.target.site,
  entry.platform,
  entry.status,
  entry.package,
  entry.version,
  entry.public_url,
  entry.verification.method,
  entry.verification.result,
  entry.credential_status,
  entry.blocked_reason,
  entry.notes.join('; '),
]);
writeFileSync(
  'publish-record.csv',
  `${[csvHeader, ...csvRows]
    .map((row) => row.map(csvCell).join(','))
    .join('\n')}\n`,
);

const counts = Object.entries(
  record.platforms.reduce((result, entry) => {
    result[entry.status] = (result[entry.status] ?? 0) + 1;
    return result;
  }, {}),
).sort(([left], [right]) => left.localeCompare(right));
const published = record.platforms.filter((entry) =>
  ['verified', 'published', 'submitted'].includes(entry.status),
);
const blocked = record.platforms.filter((entry) =>
  entry.status.startsWith('blocked_'),
);
const failed = record.platforms.filter((entry) => entry.status === 'failed');
const credentialCleanup = record.platforms.filter(
  (entry) => entry.cleanup.length > 0,
);

const markdown = [
  `# Publish Record: ${record.target.brand}`,
  '',
  `- Site: <${record.target.site}>`,
  `- Source repo: <${record.target.source_repo}>`,
  `- Started: ${record.target.run_started_at}`,
  `- Finished: ${record.target.run_finished_at}`,
  '',
  '## Summary',
  '',
  '| Status | Count |',
  '| --- | ---: |',
  ...counts.map(([status, count]) => `| ${status} | ${count} |`),
  '',
  '## Published Links',
  '',
  '| Platform | Package | Version | Public URL | Verification |',
  '| --- | --- | --- | --- | --- |',
  ...published.map(
    (entry) =>
      `| ${entry.platform} | \`${entry.package}\` | \`${entry.version}\` | ${
        entry.public_url ? `<${entry.public_url}>` : ''
      } | ${entry.verification.result} |`,
  ),
  '',
  '## Blocked Or Manual Steps',
  '',
  '| Platform | Status | Reason | Owner |',
  '| --- | --- | --- | --- |',
  ...blocked.map((entry) => {
    const owner =
      record.follow_up.find((item) => item.platform === entry.platform)
        ?.owner ?? 'user';
    return `| ${entry.platform} | \`${entry.status}\` | ${entry.blocked_reason} | ${owner} |`;
  }),
  '',
  '## Failed Platforms',
  '',
  '| Platform | Reason | Next action |',
  '| --- | --- | --- |',
  ...failed.map(
    (entry) =>
      `| ${entry.platform} | ${entry.blocked_reason} | Review publish logs and artifact validation. |`,
  ),
  '',
  '## Credential Cleanup',
  '',
  ...(credentialCleanup.length
    ? credentialCleanup.flatMap((entry) =>
        entry.cleanup.map((item) => `- ${entry.platform}: ${item}.`),
      )
    : ['- No temporary credentials were created.']),
  '',
  '## Follow-Up Queue',
  '',
  ...record.follow_up.map(
    (item) => `- ${item.platform}: ${item.reason} Owner: ${item.owner}.`,
  ),
  '',
];
writeFileSync('publish-record.md', markdown.join('\n'));
