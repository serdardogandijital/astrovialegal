import Layout from '../components/Layout';

export default function TermsOfServicePage() {
  return (
    <Layout title="Kullanım Şartları">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-2xl font-semibold">Kullanım Şartları</h1>
        <p>
          Astrovia hizmetlerini kullanarak aşağıdaki şartları kabul etmiş
          olursunuz. Lütfen bu metni dikkatle okuyun.
        </p>

        <h2 className="text-xl font-semibold">Hizmet Tanımı</h2>
        <p>
          Astrovia; astroloji danışmanlığı, wellness içerikleri, sohbet ve
          rezervasyon özellikleri sunar. Hizmet kapsamı zamanla güncellenebilir.
        </p>

        <h2 className="text-xl font-semibold">Kullanıcı Yükümlülükleri</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hesap bilgilerinizi doğru ve güncel tutmak</li>
          <li>Platformu yasalara uygun ve iyi niyetle kullanmak</li>
          <li>Başka kullanıcıların hak ve gizliliğine saygı göstermek</li>
          <li>Platformu kötüye kullanmamak (spam, dolandırıcılık vb.)</li>
        </ul>

        <h2 className="text-xl font-semibold">Ödemeler ve İadeler</h2>
        <p>
          Dijital hizmet ödemelerinde yerel tüketici mevzuatına uygun
          iade/kısmi iade politikaları uygulanır. Detaylar destek kanallarımız
          üzerinden paylaşılır.
        </p>

        <h2 className="text-xl font-semibold">Hesap Kapatma</h2>
        <p>
          Hesabınızı dilediğiniz zaman silme talebiyle kapatabilirsiniz.
          Talep sonrası verileriniz yasal saklama yükümlülüğü hariç kalıcı
          olarak silinir veya anonimleştirilir.
        </p>

        <h2 className="text-xl font-semibold">Sorumluluk Reddi</h2>
        <p>
          Astrovia içerik ve yorumları bilgilendirme amaçlıdır. Profesyonel
          sağlık, hukuk, finans veya psikolojik danışmanlık yerine geçmez.
        </p>

        <h2 className="text-xl font-semibold">Yürürlük</h2>
        <p>
          Bu şartlar yayınlandığı tarihten itibaren geçerlidir. Güncellemeler
          platformda duyurulur.
        </p>
      </div>
    </Layout>
  );
}
