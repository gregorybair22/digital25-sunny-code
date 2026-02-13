// SSR Verification Component
// This component displays server-side rendered data
// If you see the timestamp in View Source, SSR is working!

export default function SSRVerification() {
  const serverTimestamp = new Date().toISOString();
  const serverTime = new Date().toLocaleString('en-US', { 
    timeZone: 'UTC',
    hour12: false 
  });
  
  return (
    <div 
      id="ssr-verification"
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#0f0',
        padding: '12px',
        fontSize: '11px',
        fontFamily: 'monospace',
        zIndex: 9999,
        borderRadius: '6px',
        border: '2px solid #0f0',
        maxWidth: '280px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#0f0' }}>
        ✓ SSR VERIFIED
      </div>
      <div style={{ marginBottom: '4px' }}>
        Server Rendered: {serverTime}
      </div>
      <div style={{ fontSize: '10px', color: '#aaa', marginTop: '8px' }}>
        Check View Source to confirm this timestamp is in HTML
      </div>
    </div>
  );
}
