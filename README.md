# FORMA — концепт сайта частной стоматологии

Адаптивный лендинг на React, TypeScript и Vite. Проект демонстрационный: он не представляет реальную клинику и не принимает заявки без подключения API.

## Запуск

```bash
npm install
npm run dev
```

Открыть адрес, напечатанный Vite (обычно `http://127.0.0.1:5173/`). Для проверки сборки: `npm run build`, затем `npm run preview`.

В текущем окружении `npm` не добавлен в PATH. Здесь проект запущен через комплектный `pnpm.cmd` из `C:\Users\Daniil\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback`. После `pnpm install` выполнено `pnpm approve-builds` для `esbuild`; далее работают `pnpm dev` и `pnpm build`.

## Перед публикацией

- Заменить название, город, телефон, адрес, режим работы и email в [`src/content.ts`](src/content.ts).
- Там же обновить направления услуг и этапы работы. Основной текст секций находится в [`src/App.tsx`](src/App.tsx).
- Добавить реальные профили врачей, квалификации, подтверждённые отзывы и кейсы. Сейчас эти блоки явно обозначены как места для будущего контента.
- Заменить все иллюстративные фотографии на съёмку клиники и команды.
- Добавить полную политику обработки данных и юридическую информацию вместо текста в футере.
- Обновить SEO-метаданные в [`index.html`](index.html). Разметка `Dentist` (подтип `LocalBusiness`) включится, когда реальные реквизиты внесены в `src/content.ts`, а в `.env.local` указаны `VITE_CLINIC_REAL=true` и `VITE_SITE_URL`.
- Подключить API приёма заявок через `VITE_APPOINTMENT_ENDPOINT` в `.env.local`. Endpoint должен принимать JSON POST и возвращать код 2xx. Без него форма прямо сообщает, что запрос не отправлен.

## Фотографии

Локальные WebP-файлы в `public/images` получены из [Unsplash](https://unsplash.com/license). Это иллюстративные материалы, не фотографии FORMA. Источники:

- [`consultation.webp`](https://unsplash.com/photos/dentist-talking-to-patient-in-a-modern-dental-office-Bg81yWKZlMg) — Harold Hizon.
- [`clinic.webp`](https://unsplash.com/photos/modern-dental-office-with-chair-and-equipment-e7MJLM5VGjY) — Benyamin Bohlouli.
- [`smile.webp`](https://unsplash.com/photos/a-woman-with-curly-hair-is-smiling-and-posing-for-a-picture-uLCaTbqyixg) — Romario Roges.
- [`interior.webp`](https://unsplash.com/photos/modern-minimalist-interior-with-white-curved-benches-kta51xgQWfI) — SHIBUN RYO; это общественный интерьер, он не выдается за интерьер клиники.

Шрифты [Prata](https://fonts.google.com/specimen/Prata), [Manrope](https://fonts.google.com/specimen/Manrope) и [DM Sans](https://fonts.google.com/specimen/DM+Sans) загружаются из Google Fonts с системными запасными шрифтами.

