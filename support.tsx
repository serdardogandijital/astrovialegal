import Layout from '../components/Layout';

export default function SupportPage() {
  return (
    <Layout title="Destek ve İletişim">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-2xl font-semibold">Destek ve İletişim</h1>
        <p>
          Astrovia ile ilgili her türlü soru, öneri veya sorun için
          aşağıdaki kanallardan bize ulaşabilirsiniz.
        </p>

        <h2 className="text-xl font-semibold">İletişim Kanalları</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            E-posta:{' '}
            <a className="text-indigo-600 underline" href="mailto:support@astrovia.com">
              support@astrovia.com
            </a>
          </li>
          <li>Uygulama içi destek formu (Profil &gt; Destek)</li>
          <li>Çalışma saatleri: Hafta içi 09:00 - 18:00 (GMT+3)</li>
        </ul>

        <h2 className="text-xl font-semibold">SSS</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hesap silme talepleri için “Hesap Silme” sayfasına göz atın.</li>
          <li>Ödeme/iade süreçleri için “Kullanım Şartları” bölümünü inceleyin.</li>
          <li>Gizlilikle ilgili sorular için “Gizlilik Politikası” sayfasını kontrol edin.</li>
        </ul>
      </div>
    </Layout>
  );
}
