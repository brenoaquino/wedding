"use client";

import { useState } from "react";

const PIX_KEY = "85997935398";

export default function PixCopyButton() {
  const [copied, setCopied] = useState(false);

  const copyPixKey = async () => {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pix-copy">
      <span className="pix-key">{PIX_KEY}</span>
      <button className="gift-option-action" type="button" onClick={copyPixKey}>
        {copied ? "Chave copiada ✓" : "Copiar chave Pix"}
      </button>
    </div>
  );
}
