import Layout from '../components/Layout';

export default function AccountDeletionPage() {
  return (
    <Layout title="Hesap Silme">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-2xl font-semibold">Hesap Silme ve Veri Silme</h1>
        <p>
          Hesabınızı dilediğiniz zaman silme talebiyle kapatabilirsiniz. Silme
          işlemi sonrası verileriniz, yasal saklama yükümlülükleri hariç,
          kalıcı olarak silinir veya anonimleştirilir.
        </p>

        <h2 className="text-xl font-semibold">Silme Talebi Nasıl Oluşturulur?</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Uygulama içindeki “Profil &gt; Ayarlar &gt; Hesabı Sil” adımlarını izleyin.</li>
          <li>
            Eğer uygulamaya erişemiyorsanız{' '}
            <a className="text-indigo-600 underline" href="mailto:support@astrovia.com">
              support@astrovia.com
            </a>{' '}
            adresine kayıtlı e-posta ile talep gönderin.
          </li>
          <li>Kimlik doğrulaması için gerekli bilgileri sağlayın.</li>
        </ol>

        <h2 className="text-xl font-semibold">Silme Sonrası</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hesabınıza ve geçmiş verilere erişiminiz kapanır.</li>
          <li>Yasal zorunluluk gerektiren kayıtlar (fatura vb.) saklanabilir.</li>
          <li>Anonimleştirme uygulanabilecek veriler anonimleştirilir.</li>
        </ul>

        <h2 className="text-xl font-semibold">Destek</h2>
        <p>
          Herhangi bir sorunuz için{' '}
          <a className="text-indigo-600 underline" href="mailto:support@astrovia.com">
            support@astrovia.com
          </a>{' '}
          üzerinden bize ulaşabilirsiniz.
        </p>
      </div>
    </Layout>
  );
}
