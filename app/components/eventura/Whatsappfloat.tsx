export default function WhatsAppFloat() {
  const href = "https://wa.me/917622856869XXXXXXXXXX";
  return (
    <a className="wa" href={href} target="_blank" rel="noreferrer">
      <span className="waIcon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12a8.5 8.5 0 0 1-12.8 7.4L3 21l1.7-5.2A8.5 8.5 0 1 1 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      WhatsApp
    </a>
  );
}

