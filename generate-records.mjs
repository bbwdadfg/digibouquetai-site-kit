import { writeFileSync } from 'node:fs';

const checkedAt = '2026-07-25T18:07:56Z';
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
      checked_at: verificationMethod === 'not_run' ? '' : checkedAt,
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
      status: 'published',
      artifactType: 'go_module',
      automationLevel: 'automated_after_git_tag',
      packageName: 'github.com/bbwdadfg/digibouquetai-site-kit',
      version: 'v0.1.1',
      publicUrl:
        'https://pkg.go.dev/github.com/bbwdadfg/digibouquetai-site-kit@v0.1.1',
      links: ['source_repository', 'go_module'],
      credentialStatus: 'not_required',
      verificationMethod: 'go_proxy_http',
      verificationResult:
        'Go proxy .info and .mod returned HTTP 200; pkg.go.dev returned 404 during initial indexing check',
      notes: [
        'Local go test coverage: 91.7%.',
        'Keep published until pkg.go.dev documentation page returns HTTP 200.',
      ],
    }),
    platform({
      platform: 'packagist',
      artifactType: 'composer_package',
      automationLevel: 'semi_auto',
      packageName: 'bbwdadfg/digibouquetai-site-kit',
      publicUrl:
        'https://packagist.org/packages/bbwdadfg/digibouquetai-site-kit',
      credentialStatus: 'keychain_item_present_not_used',
      notes: ['Composer artifact not generated in this run.'],
    }),
    platform({
      platform: 'crates_io_docs_rs',
      status: 'blocked_credentials',
      artifactType: 'rust_crate',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai-site-kit',
      publicUrl: 'https://crates.io/crates/digibouquetai-site-kit',
      credentialStatus: 'keychain_item_missing',
      blockedReason:
        'macOS Keychain service publish-package-backlinks/crates-token is missing',
      notes: ['Registry API confirmed the candidate name was available.'],
    }),
    platform({
      platform: 'rubygems',
      status: 'blocked_credentials',
      artifactType: 'ruby_gem',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai-site-kit',
      publicUrl: 'https://rubygems.org/gems/digibouquetai-site-kit',
      credentialStatus: 'keychain_item_missing',
      blockedReason:
        'macOS Keychain service publish-package-backlinks/rubygems-api-key is missing',
      notes: ['Registry API confirmed the candidate name was available.'],
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
      artifactType: 'python_package',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai-site-kit',
      publicUrl: 'https://pypi.org/project/digibouquetai-site-kit/',
      credentialStatus: 'keychain_item_present_not_used',
      notes: [
        'Registry JSON confirmed the candidate name was available.',
        'Python artifact not generated in this run.',
      ],
    }),
    platform({
      platform: 'pub_dev',
      artifactType: 'dart_package',
      automationLevel: 'semi_auto_oauth',
      packageName: 'digibouquetai_site_kit',
      publicUrl: 'https://pub.dev/packages/digibouquetai_site_kit',
      credentialStatus: 'oauth_not_checked',
      notes: [
        'Registry API confirmed the candidate name was available.',
        'Dart artifact not generated in this run.',
      ],
    }),
    platform({
      platform: 'hex_hexdocs',
      artifactType: 'elixir_package',
      automationLevel: 'automated_with_token',
      packageName: 'digibouquetai_site_kit',
      publicUrl: 'https://hex.pm/packages/digibouquetai_site_kit',
      credentialStatus: 'keychain_item_present_not_used',
      notes: [
        'Registry API confirmed the candidate name was available.',
        'Elixir artifact not generated in this run.',
      ],
    }),
    platform({
      platform: 'clojars',
      artifactType: 'maven_artifact',
      automationLevel: 'automated_with_token',
      packageName: 'net.clojars.tianwei/digibouquetai-site-kit',
      publicUrl:
        'https://clojars.org/net.clojars.tianwei/digibouquetai-site-kit',
      credentialStatus: 'keychain_items_present_not_used',
      notes: ['Java/Clojars artifact not generated in this run.'],
    }),
    platform({
      platform: 'docker_hub',
      artifactType: 'oci_image',
      automationLevel: 'automated_with_token_or_api',
      packageName: 'baiwei111/digibouquetai-site-kit',
      publicUrl: 'https://hub.docker.com/r/baiwei111/digibouquetai-site-kit',
      credentialStatus: 'keychain_items_present_not_used',
      notes: ['OCI image was not generated in this run.'],
    }),
    platform({
      platform: 'jsr',
      status: 'blocked_oauth',
      artifactType: 'typescript_package',
      automationLevel: 'semi_auto',
      packageName: '@bbwdadfg/digibouquetai-site-kit',
      version: '0.1.0',
      publicUrl: 'https://jsr.io/@bbwdadfg/digibouquetai-site-kit',
      links: ['README.md', 'repository'],
      credentialStatus: 'keychain_item_present_not_used',
      blockedReason:
        'JSR requires sign-in and first-time scoped package approval before live publish',
      verificationMethod: 'jsr_cli_dry_run_and_orca_snapshot',
      verificationResult:
        'JSR dry-run passed; Orca tab e074945e-eb9c-4e01-bc5e-8465dfdf14be is stopped at Sign in to JSR',
      notes: [
        'Live publish was not attempted because the new package API returned 404 and approval is user-controlled.',
        'The jsr CLI wrapper can expose token arguments on failure, so no token was passed before namespace approval.',
      ],
    }),
    platform({
      platform: 'maven_central_javadoc',
      artifactType: 'java_library',
      automationLevel: 'semi_auto_signed',
      packageName: 'io.github.bbwdadfg:digibouquetai-site-kit',
      publicUrl:
        'https://central.sonatype.com/artifact/io.github.bbwdadfg/digibouquetai-site-kit',
      credentialStatus: 'keychain_items_present_not_used',
      notes: ['Central-ready Java artifact and signatures were not generated in this run.'],
    }),
    platform({
      platform: 'nuget',
      artifactType: 'dotnet_package',
      automationLevel: 'automated_with_token',
      packageName: 'DigibouquetaiSiteKit',
      publicUrl: 'https://www.nuget.org/packages/DigibouquetaiSiteKit',
      credentialStatus: 'keychain_item_present_not_used',
      notes: [
        'Registry API confirmed the candidate ID was available.',
        '.NET artifact not generated in this run.',
      ],
    }),
    platform({
      platform: 'cocoapods',
      artifactType: 'ios_macos_pod',
      automationLevel: 'semi_auto_with_trunk_auth',
      packageName: 'DigibouquetaiSiteKit',
      publicUrl: 'https://cocoapods.org/pods/DigibouquetaiSiteKit',
      credentialStatus: 'keychain_item_present_not_used',
      notes: [
        'Trunk API confirmed the candidate pod name was available.',
        'Swift pod was not generated in this run.',
      ],
    }),
    platform({
      platform: 'luarocks',
      artifactType: 'lua_module',
      automationLevel: 'automated_with_token',
      packageName: 'bbwdadfg/digibouquetai-site-kit',
      publicUrl:
        'https://luarocks.org/modules/bbwdadfg/digibouquetai-site-kit',
      credentialStatus: 'keychain_item_present_not_used',
      notes: ['Lua rock was not generated in this run.'],
    }),
    platform({
      platform: 'cpan_metacpan',
      artifactType: 'perl_distribution',
      automationLevel: 'automated_with_pause_account',
      packageName: 'DigiBouquetAI-SiteKit',
      publicUrl: 'https://metacpan.org/dist/DigiBouquetAI-SiteKit',
      credentialStatus: 'keychain_items_present_not_used',
      notes: [
        'Perl distribution was not generated in this run.',
        'Prior run memory reports stored PAUSE credentials returned 401; revalidate before publish.',
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
      artifactType: 'windows_package',
      automationLevel: 'semi_auto_review',
      packageName: 'digibouquetai-site-kit',
      publicUrl:
        'https://community.chocolatey.org/packages/digibouquetai-site-kit',
      credentialStatus: 'keychain_item_present_not_used',
      notes: ['Windows package was not generated in this run.'],
    }),
    platform({
      platform: 'github_packages',
      artifactType: 'github_package',
      automationLevel: 'automated_with_token',
      packageName: '@bbwdadfg/digibouquetai-site-kit',
      publicUrl:
        'https://github.com/bbwdadfg/digibouquetai-site-kit/pkgs/npm/digibouquetai-site-kit',
      credentialStatus: 'keychain_item_present_not_used',
      notes: ['GitHub Packages copy was not published in this run.'],
    }),
    platform({
      platform: 'gitlab_packages',
      artifactType: 'gitlab_package',
      automationLevel: 'automated_with_token_or_ci',
      packageName: 'digibouquetai-site-kit',
      publicUrl: '',
      credentialStatus: 'keychain_item_present_not_used',
      notes: ['GitLab project/package was not created in this run.'],
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
      platform: 'pkg_go_dev',
      reason: 'Recheck documentation page after Go indexing completes.',
      owner: 'agent',
    },
    {
      platform: 'jsr',
      reason:
        'Complete JSR sign-in and approve @bbwdadfg/digibouquetai-site-kit in the prepared Orca tab, then rerun live publish.',
      owner: 'user',
    },
    {
      platform: 'crates_io_docs_rs',
      reason:
        'Add the crates.io token to Keychain before preparing and publishing the Rust crate.',
      owner: 'user',
    },
    {
      platform: 'rubygems',
      reason:
        'Add the RubyGems API key to Keychain before preparing and publishing the gem.',
      owner: 'user',
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
