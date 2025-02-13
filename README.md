# BestAuth - Authentication Service

BestAuth - bu NestJS frameworkida qurilgan zamonaviy autentifikatsiya xizmati. Bu loyiha foydalanuvchilarni ro'yxatdan o'tkazish, kirish va boshqarish uchun xavfsiz va kengaytiriladigan yechim taqdim etadi.

## Texnologiyalar

- NestJS v10
- TypeORM
- MySQL
- Express
- TypeScript
- Class Validator
- Crypto-JS

## O'rnatish

1. Loyihani clone qiling:
```bash
git clone <repository-url>
cd bestauth
```

2. Kerakli paketlarni o'rnating:
```bash
npm install
```

3. `.env` faylini yarating va sozlamalarni kiriting:
```env
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
```

## Ishga tushirish

Loyihani development rejimida ishga tushirish:
```bash
npm run start:dev
```

Production uchun build qilish va ishga tushirish:
```bash
npm run build
npm run start:prod
```

## API Endpointlar

Loyiha ikkita asosiy API yo'nalishiga ega:

### Front API
Web ilovalar uchun API endpointlar

### Mobile API
Mobile ilovalar uchun maxsus API endpointlar

## Xavfsizlik

- Request Throttling - so'rovlar sonini cheklash
- Class Validation - kiritilgan ma'lumotlarni tekshirish
- Crypto-JS - ma'lumotlarni shifrlash

## Testing

Unit testlarni ishga tushirish:
```bash
npm run test
```

E2E testlarni ishga tushirish:
```bash
npm run test:e2e
```

## Litsenziya

[UNLICENSED]
