import { title } from "@/components/primitives";

export default function Impressum() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Impressum</h1>
      <p className="mb-2">Angaben gemäß § 5 TMG</p>
      <address className="not-italic mb-4">
        <p>Marius Bungert</p>
        <p>Hofackerstraße 9</p>
        <p>92348 Berg</p>
      </address>
      <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
      <p className="mb-1">
        Telefon: <a href="tel:+491745816938" className="text-blue-600 hover:underline">0174 5816938</a>
      </p>
      <p className="mb-4">
        E-Mail: <a href="mailto:mariusbungert@gmx.de" className="text-blue-600 hover:underline">mariusbungert@gmx.de</a>
      </p>
      <p className="text-sm text-gray-600">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://www.e-recht24.de
        </a>
      </p>
    </div>
  );
}