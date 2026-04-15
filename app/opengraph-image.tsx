import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  const logo = new URL('../public/images/emlak-logo.png', import.meta.url)
    .href;

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        background:
          'linear-gradient(135deg, #11243d 0%, #1b385b 52%, #d8b36a 100%)',
        padding: '48px',
        color: '#f8f3eb',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          border: '1px solid rgba(248,243,235,0.18)',
          borderRadius: '32px',
          padding: '44px',
          background: 'rgba(17, 36, 61, 0.22)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '28px',
            fontWeight: 600,
          }}
        >
          <img
            src={logo}
            alt="Emlak Real Estate LLC logo"
            style={{
              height: '56px',
              width: '56px',
              borderRadius: '999px',
              objectFit: 'cover',
              border: '1px solid rgba(248,243,235,0.2)',
              background: 'rgba(216, 179, 106, 0.22)',
            }}
          />
          Emlak Real Estate LLC
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: '72px', lineHeight: 1.05, fontWeight: 700 }}>
            Emlak Real Estate LLC | Premium Real Estate Experiences in Dubai,
            UAE
          </div>
          <div
            style={{
              fontSize: '30px',
              lineHeight: 1.4,
              maxWidth: '820px',
              color: 'rgba(248,243,235,0.86)',
            }}
          >
            Curated properties, strategic guidance, and polished service for
            buyers, sellers, and investors.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
