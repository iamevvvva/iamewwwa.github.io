import type { Metadata } from 'next';
import { I18nProvider } from '@/app/providers/I18nProvider';
import { ClientLayout } from '@/app/providers/ClientLayout';
import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://iamewwwa.ru'),
  title: 'Ева Варнакова - iamewwwa | РГХПУ им.С.Г.Строганова',
  description:
    'Я — Ева Варнакова (@iamewwwa) художник-иллюстратор, студент РГХПУ им. С.Г.Строганова, специализируюсь на искусстве и дизайне.',
  openGraph: {
    title: 'Ева Варнакова - iamewwwa | РГХПУ им.С.Г.Строганова',
    description:
      'Я — Ева Варнакова (@iamewwwa) художник-иллюстратор, студент РГХПУ им. С.Г.Строганова.',
    url: 'https://iamewwwa.ru',
    siteName: 'iamewwwa',
    images: [{ url: 'https://iamewwwa.ru/images/bambi.png', alt: 'Изображение для социальных сетей' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ева Варнакова - iamewwwa | РГХПУ им. С.Г.Строганова',
    description: 'Я — Ева Варнакова (@iamewwwa) художник-иллюстратор.',
    images: ['/images/bambi.png'],
  },
  keywords:
    'iamewwwa, Ева Варнакова, Eva Varnakova, художник, искусство, дизайн, Stroganov University, Строгановка, РГХПУ им. С.Г.Строганова',
  authors: [{ name: 'Ева Варнакова' }],
  manifest: '/favicons/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16' },
    ],
    apple: '/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <I18nProvider>
          <ClientLayout>{children}</ClientLayout>
        </I18nProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}(k=e.createElement(t)),(a=e.getElementsByTagName(t)[0]),(k.async=1),(k.src=r),a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');ym(99766226,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
`,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/99766226" style={{ position: 'absolute', left: -9999 }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
