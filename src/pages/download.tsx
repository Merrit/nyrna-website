import React from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';

import styles from "./download.module.css";

function DownloadOptions() {
    return (
        <div className={styles.grid}>
            <div className={styles.column}>
                <FontAwesomeIcon icon={faLinux} size="4x" />
                <h2>Linux</h2>
                <Link
                    className="button button--primary button--lg"
                    href="https://flathub.org/apps/details/codes.merritt.Nyrna">
                    FlatHub
                </Link>
                <Link
                    className="button button--primary button--lg"
                    to="/download-linux-portable">
                    Portable
                </Link>
            </div>

            <div className={styles.column}>
                <FontAwesomeIcon icon={faWindows} size="4x" />
                <h2>Windows</h2>
                <Link
                    className="button button--primary button--lg"
                    href="https://apps.microsoft.com/detail/Nyrna/9p9s8kz41grj?launch=true
                    &mode=mini">
                    Microsoft Store
                </Link>
                <Link
                    className="button button--primary button--lg"
                    href="https://github.com/Merrit/nyrna/releases/latest/download/Nyrna-Windows-Installer.exe">
                    Installer
                </Link>
                <Link
                    className="button button--primary button--lg"
                    href="https://github.com/Merrit/nyrna/releases/latest/download/Nyrna-Windows-Portable.zip">
                    Portable
                </Link>
            </div>
        </div>
    );
}

export default function Downloads() {
    return (
        <Layout title="Download" description="Download Nyrna">
            <div style={{ marginBottom: '40px' }}></div>
            <div className="container">
                <Heading as="h1">Download Nyrna</Heading>
                <div style={{ marginBottom: '50px' }}></div>
                <DownloadOptions />
            </div>
        </Layout>
    );
}
