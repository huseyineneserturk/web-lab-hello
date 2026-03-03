# CSS Kararlari

## 1. Breakpoint Secimi

- **Neden 640px ve 1024px sectim?** 640px, cep telefonlarindan tablet boyutuna gecis noktasidir; bu noktada hakkimda bolumu yatay duzene gecilebilecek kadar genisler. 1024px ise dizustu/masaustu sinirindir; proje gridi sabit 3 sutuna gecmesi icin yeterli alan vardir.
- **Icerigim bu noktalarda nasil degisiyor?** 640px altinda tek sutunlu, ortali duzene giderek okunabilirlik korunur. 640-1023px araliginda (tablet) hakkimda bolumu yatay siralama kazanir ve form butonu tam genislik olma zorunlulugunu birakir. 1024px ve uzeri masaustu duzende ana icerik 1200px ile sinirlanir ve proje kartlari 3 sutunlu grid ile gosterilir.

## 2. Layout Tercihleri

- **Header icin neden Flexbox sectim?** Header iki ogeyi (baslik + nav) yatayda karsilikli konumlandirmak icin idealdir; `justify-content: space-between` ile minimal kod gerektirir. Grid'in iki boyutlu gucune ihtiyac yoktur.
- **Proje kartlari icin neden Grid sectim?** Kartlar bir matris duzeni olusturuyor; `auto-fit` ile media query yazmadan otomatik sutun sayisi yonetimi saglanir. Flexbox ile ayni sonucu elde etmek daha fazla kod gerektirir.
- **auto-fit kullandim:** `auto-fit` kullanarak bos sutunlar daraltilir ve mevcut kartlar mevcut alani doldurur. `auto-fill` kullansaydim bos sutunlar korunacak ve kartlar gereksiz yere kucuk kalacakti.

## 3. Design Tokens

- **Renk paleti:** `#1E3A8A` (koyu lacivert) birincil renk olarak secildi; guven ve profesyonellik hissi verir, portofy sayfasi icin uygundur. `#2563EB` ikincil renk olarak etkilesilecek ogelerde (hover, focus, link) kullanildi.
- **Spacing skalasi:** `--space-xs` (0.25rem) ile `--space-3xl` (4rem) arasinda katlanan bir skala belirlendi; boylece tutarli bosluklar her yerde `var()` ile kullanilabilir, piksel degerleri dogrudan koda gomulmez.
- **Fluid typography:** `clamp()` dogrudan kullanilmadi; bunun yerine token tabanli sabit degerler tercih edildi. Gelecekte `clamp(var(--text-base), 2vw, var(--text-xl))` seklinde genisletilebilir.

## 4. Responsive Stratejiler

- **Mobile-first yaklasim:** Tum temel stiller once kucuk ekranlar icin yazildi; `@media (min-width: ...)` ile buyuk ekranlara ek stiller eklendi. Bu yaklasim daha az kod uretir ve dusuk guclu cihazlarda performansi arttirir.
- **Hangi elemanlar breakpoint'lerde degisiyor?** Hakkimda bolumu (dikey → yatay), section padding'i, form submit butonu genisligi ve proje grid sutun sayisi (auto-fit → sabit 3 sutun).
- **Gorsel boyutlari:** `img { max-width: 100%; height: auto; }` ile tum gorseller konteyner'e sigacak sekilde ayarlandi. Proje kart gorselleri `object-fit: cover` ve sabit `height: 200px` ile tutarli oran korur. Profil fotografi `aspect-ratio: 1` + `border-radius: 9999px` ile dairesel gosterilir.
