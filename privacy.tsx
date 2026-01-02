import Layout from '../components/Layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout title="Gizlilik Politikası">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-2xl font-semibold">Gizlilik Politikası</h1>
        <p>
          Astrovia olarak kişisel verilerinizi KVKK ve ilgili mevzuat
          kapsamında koruyoruz. Bu metin, verilerinizi nasıl işlediğimizi ve
          haklarınızı açıklar.
        </p>
        <h2 className="text-xl font-semibold">Toplanan Veriler</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hesap bilgileri (ad, e-posta, telefon, profil)</li>
          <li>Ödeme ve faturalandırma bilgileri</li>
          <li>Uygulama içi kullanım ve tercih verileri</li>
          <li>Cihaz ve bağlantı bilgileri (IP, tarayıcı, cihaz türü)</li>
        </ul>
        <h2 className="text-xl font-semibold">İşleme Amaçları</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hizmetlerin sunulması ve iyileştirilmesi</li>
          <li>Ödeme işlemleri ve faturalandırma</li>
          <li>Güvenlik, dolandırıcılık ve kötüye kullanım önleme</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        </ul>
        <h2 className="text-xl font-semibold">Haklarınız</h2>
        <p>
          KVKK kapsamındaki erişim, düzeltme, silme, kısıtlama ve itiraz
          haklarınızı destek kanallarımız üzerinden kullanabilirsiniz.
        </p>
        <h2 className="text-xl font-semibold">İletişim</h2>
        <p>
          Gizlilikle ilgili talepleriniz için{' '}
          <a className="text-indigo-600 underline" href="mailto:support@astrovia.com">
            support@astrovia.com
          </a>{' '}
          adresinden bize ulaşabilirsiniz.
        </p>
      </div>
    </Layout>
  );
}
