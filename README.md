# 🚀 Reward Points API (Backend)

ระบบ API สำหรับจัดการข้อมูลผู้ใช้, ประวัติการเล่น และการแลกรางวัล พัฒนาด้วย NestJS และ Prisma ORM

🔗 Links
Live Demo: https://my-ptsgainer-game-fullstack-test.vercel.app

Frontend Repo: https://github.com/chalothorns/my-ptsgainer-game-fullstackTest.git

## ✨ Tech Stack
- **Framework:** NestJS
- **Database:** PostgreSQL (Render Managed)
- **ORM:** Prisma
- **Deployment:** Render

## 🛠️ Database Schema
- **User:** เก็บข้อมูลผู้ใช้และคะแนนสะสม (totalScore)
- **PlayHistory:** บันทึกประวัติการรับคะแนน (Relation with User)
- **RewardHistory:** บันทึกประวัติการแลกของรางวัล (Relation with User)

## ⚙️ Installation & Setup
Clone repository
   ```bash
   git clone [https://github.com/chalothorns/my-project-fullstack-test.git](https://github.com/chalothorns/my-project-fullstack-test.git)
```

## Install dependencies
```bash 
npm install
```
## Generate Prisma Client
```bash 
npx prisma generate
```

## Set Environment Variables in .env:
```bash 
DATABASE_URL="your_postgresql_url"
CORS_ORIGIN="https://your-url.vercel.app"
```
