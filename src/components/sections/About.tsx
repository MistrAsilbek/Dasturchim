import { Code, Palette, Rocket, Users } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { ParallaxSection } from '../ParallaxSection';

export function About() {
  return (
    <div className="min-h-screen pt-20 lg:pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ParallaxSection speed={1}>
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              Men haqimda
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Men telegram bot va web saytlar ishlab chiquvchi, dasturlashni pul uchun emas qiziqqanim uchun tanlagan dasturchiman
            </p>
          </div>
        </ParallaxSection>

        <ParallaxSection speed={0.8}>
          <GlassCard depth="high" className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Mening hikoyam
                </h2>

                {/* UPDATED PART */}
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Men dasturlashga <span className="font-semibold text-gray-800 dark:text-white">2023-yilda, 14 yoshimda</span> qiziqa boshladim. 
                    Dastlab YouTube orqali Telegram botlar yaratish, kanal yuritish va IT sohasiga oid 
                    videolarni tomosha qilish orqali bilim ola boshladim. Shu jarayon mening 
                    texnologiyalarga bo‘lgan qiziqishimni yanada kuchaytirdi.
                  </p>

                  <p>
                    2023-yilda mohirdev platformasi tomonidan o‘tkazilgan konkursda qatnashib, 
                    <span className="font-semibold text-gray-800 dark:text-white"> Foundation kursini yutib oldim</span> va muvaffaqiyatli yakunladim. 
                    Bu bosqich menga dasturlash asoslarini chuqurroq tushunish, algoritmik fikrlashni 
                    rivojlantirish va real loyihalarga tayyor bo‘lish imkonini berdi.
                  </p>

                  <p>
                    2024–2025-yillar davomida turli o‘quv markazlarida dasturlash va ingliz tilini 
                    o‘rganib, nazariy bilimlarimni amaliy loyihalar orqali mustahkamladim. 
                    Turli web-ilovalar, skriptlar va avtomatlashtirish loyihalari ustida ishlash orqali 
                    tajribamni sezilarli darajada oshirdim.
                  </p>

                  <p>
                    Hozirgi kunda men <span className="font-semibold text-gray-800 dark:text-white">backend va full-stack</span> yo‘nalishida 
                    faoliyat olib boraman. Web3 loyihalar, parsing va avtomatlashtirish bilan shug‘ullanish 
                    mening asosiy qiziqishlarimdan biridir. Bugungi kunda nafaqat o‘zim, balki 
                    atrofimdagi ko‘plab insonlar meni dasturchi sifatida tan olishadi.
                  </p>

                  <p>
                    ☀️ <span className="font-semibold text-gray-800 dark:text-white">Qiziqishlar:</span><br />
                    GYM – mashq qilish <br />
                    O‘yinlar – kompyuter o‘yinlari <br />
                    Coding – turli scriptlar yozish, web3 parsing va avtomatlashtirish
                  </p>
                </div>
                {/* END UPDATED PART */}

              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Men nima qila olaman? 
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Telegram bot
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Xar xil companylar uchun mukammal telegram bot yasay olaman.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        UI/UX Dizayn
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Brendingiz uchun mukammal dizayn qilib bera olaman
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Frontend va Backend 
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Mukammal darajada saytni Frontent va Backend qismini dasturlay olaman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </GlassCard>
        </ParallaxSection>

        <ParallaxSection speed={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: 'Codni tozalash',
                description: 'Coddagi xatolarni tuzatish',
              },
              {
                icon: Palette,
                title: 'Yaxshi Dizayn',
                description: 'Brendingizni xar bi pixeliga mehr berish',
              },
              {
                icon: Users,
                title: 'Jamoa bilan ishlash',
                description: 'Dasturchilar jamoasi bilan ishlash',
              },
              {
                icon: Rocket,
                title: 'Idea yaratish',
                description: 'Xar doim creative idealar yaratish',
              },
            ].map((value, index) => (
              <GlassCard key={index} depth="medium">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </ParallaxSection>
      </div>
    </div>
  );
}