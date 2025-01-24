import { title } from "@/components/primitives";

export default function PrivacPolicy() {
  return (
    <div className="container mx-auto px-4 py-6">
    <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>
    <p className="text-sm text-gray-600 mb-6">Stand: 27. April 2023</p>

    <h2 className="text-2xl font-semibold mb-2">Inhaltsübersicht</h2>
    <ul className="list-disc pl-6 mb-6">
      <li>Verantwortlicher</li>
      <li>Übersicht der Verarbeitungen</li>
      <li>Maßgebliche Rechtsgrundlagen</li>
      <li>Sicherheitsmaßnahmen</li>
      <li>Übermittlung von personenbezogenen Daten</li>
      <li>Datenverarbeitung in Drittländern</li>
      <li>Löschung von Daten</li>
      <li>Einsatz von Cookies</li>
      <li>Bereitstellung des Onlineangebotes und Webhosting</li>
      <li>Kontakt- und Anfragenverwaltung</li>
      <li>Webanalyse, Monitoring und Optimierung</li>
      <li>Präsenzen in sozialen Netzwerken (Social Media)</li>
      <li>Änderung und Aktualisierung der Datenschutzerklärung</li>
      <li>Rechte der betroffenen Personen</li>
    </ul>

    <h2 className="text-2xl font-semibold mb-4">Verantwortlicher</h2>
    <p className="mb-4">
      Marius Bungert
      <br />
      Hofackerstraße 9
      <br />
      92348 Berg
    </p>

    <h2 className="text-2xl font-semibold mb-4">Übersicht der Verarbeitungen</h2>
    <p className="mb-4">
      Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
      die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
      Personen.
    </p>
    <h3 className="text-lg font-medium mb-2">Arten der verarbeiteten Daten</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Kontaktdaten</li>
      <li>Inhaltsdaten</li>
      <li>Nutzungsdaten</li>
      <li>Meta-, Kommunikations- und Verfahrensdaten</li>
    </ul>
    <h3 className="text-lg font-medium mb-2">Kategorien betroffener Personen</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Kommunikationspartner</li>
      <li>Nutzer</li>
    </ul>
    <h3 className="text-lg font-medium mb-2">Zwecke der Verarbeitung</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Kontaktanfragen und Kommunikation</li>
      <li>Sicherheitsmaßnahmen</li>
      <li>Reichweitenmessung</li>
      <li>Tracking</li>
      <li>Verwaltung und Beantwortung von Anfragen</li>
      <li>Feedback</li>
      <li>Marketing</li>
      <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
      <li>Informationstechnische Infrastruktur</li>
    </ul>

    <h2 className="text-2xl font-semibold mb-4">Maßgebliche Rechtsgrundlagen</h2>
    <p className="mb-4">
      Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.
    </p>
    <h3 className="text-lg font-medium mb-2">Einwilligung</h3>
    <p className="mb-4">
      (Art. 6 Abs. 1 S. 1 lit. a) DSGVO) - Die betroffene Person hat ihre
      Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen
      Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke
      gegeben.
    </p>
    <h3 className="text-lg font-medium mb-2">Berechtigte Interessen</h3>
    <p className="mb-4">
      (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) - Die Verarbeitung ist zur Wahrung
      der berechtigten Interessen des Verantwortlichen oder eines Dritten
      erforderlich, sofern nicht die Interessen oder Grundrechte und
      Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener
      Daten erfordern, überwiegen.
    </p>

    <h2 className="text-2xl font-semibold mb-4">Sicherheitsmaßnahmen</h2>
    <p className="mb-4">
      Wir treffen nach Maßgabe der gesetzlichen Vorgaben geeignete technische
      und organisatorische Maßnahmen, um ein dem Risiko angemessenes
      Schutzniveau zu gewährleisten. Zu den Maßnahmen gehören insbesondere die
      Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten.
    </p>

    {/* Add other sections in a similar format */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">Änderung und Aktualisierung der Datenschutzerklärung</h2>
    <p className="mb-4">
      Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Rechte der betroffenen Personen</h2>
    <p className="mb-4">
      Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben. Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Widerspruch und weitere Rechte.
    </p>
  </div>
  );
}