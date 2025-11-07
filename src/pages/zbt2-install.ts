import '@nabucasa/sl-web-tools';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/details.js';

@customElement('zbt2-install')
export class ZBT2InstallPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    p[slot='subtitle'] {
      color: var(--wa-color-brand-50);
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0 0 10px 0;
    }

    .footer-content {
      margin-bottom: 16px;
    }

    .footer-content h3 {
      margin-top: 24px;
    }

    .footer-content ul,
    .footer-content ol {
      margin: 8px 0;
      padding-left: 24px;
    }

    .footer-content li {
      margin: 8px 0;
      line-height: 1.6;
    }

    .footer-content p {
      margin: 12px 0;
      line-height: 1.6;
    }

    .footer-content a {
      color: var(--wa-color-brand-50);
      text-decoration: none;
    }

    .footer-content a:hover {
      text-decoration: underline;
    }

    .flasher-container {
      margin: 24px 0 12px 4px;
    }
  `;

  render() {
    return html`
      <details-page back-href="/zbt2/" back-label="Back">
        <span slot="title">Install firmware</span>
        <p slot="subtitle">
          Update your ZBT-2 with the latest Zigbee or Thread firmware
        </p>

        <div slot="footer" class="footer-content">
          <p>
            Home Assistant will automatically detect updates for the Home
            Assistant Connect ZBT-2 and allow you to install them. This page is
            only needed if you are using the device with other software than
            Home Assistant.
          </p>
          <p>
            This firmware installer supports installing both the latest version
            of the Zigbee and Thread firmware.
          </p>
          <div class="flasher-container">
            <nabucasa-zigbee-flasher
              manifest="/assets/manifests/zbt2.json"
            >
              <span slot="button">Install firmware</span>
            </nabucasa-zigbee-flasher>
          </div>
        </div>
      </details-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zbt2-install': ZBT2InstallPage;
  }
}
