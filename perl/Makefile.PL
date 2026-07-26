use strict;
use warnings;
use ExtUtils::MakeMaker;

WriteMakefile(
    NAME => 'DigiBouquetAI::SiteKit',
    VERSION_FROM => 'lib/DigiBouquetAI/SiteKit.pm',
    ABSTRACT => 'URL helpers for DigiBouquet AI',
    AUTHOR => 'DigiBouquet AI <support@digibouquetai.com>',
    LICENSE => 'mit',
    MIN_PERL_VERSION => '5.010',
    META_MERGE => {
        'meta-spec' => { version => 2 },
        resources => {
            homepage => 'https://digibouquetai.com',
            repository => {
                type => 'git',
                url => 'https://github.com/bbwdadfg/digibouquetai-site-kit.git',
                web => 'https://github.com/bbwdadfg/digibouquetai-site-kit',
            },
        },
    },
);
