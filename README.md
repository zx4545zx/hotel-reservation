# Hotel Reservation
ระบบการจองห้องประชุมภายในโรงแรม + ห้องพัก
- จองห้องประชุมได้
- เพิ่มห้องพักได้
- ทำใบเสนอราคาได้

## frontend

### สิ่งที่ต้องมี
- node.js ( https://nodejs.org/ )
- yarn ( https://yarnpkg.com/ )

พัฒนาโดยใช้ ***Next.js*** ( https://nextjs.org/ )
โดยใช้ css framework เป็น ***bulma*** ( https://bulma.io/ ) ในการทำ UX/UI
และยังมี Library อื่นๆ ที่เป็นตัวช่วยในการทำโปรเจ็กต์นี้
- fontawesome ( https://fontawesome.com/ ) Internet's icon library.
- axios ( https://axios-http.com/ ) Fetch API library.
- react hook form ( https://react-hook-form.com/ ) Management form.

เมื่อทำการ clone repositories ทำการเข้าโฟลเดอร์ใน terminal ด้วยคำสั่ง
```
cd frontend
```
จากนั้นใช้คำสั่งข้างล่าง ในการติดตั้ง dependencies
```
yarn
```
ทำการ run โปรเจ็กต์ในโหมด developer ด้วยคำสั่ง
```
yarn dev
```

## backend

### สิ่งที่ต้องมี
- ภาษา ruby ( แนะนำให้ติดตั้งผ่าน asdf : http://asdf-vm.com/ )
- ruby on rails ( https://rubyonrails.org/ )
- postgresql ( https://www.postgresql.org/ )

ขั้นแรกเข้าไปยัง postgresql console ด้วยคำสั่ง
```
psql
```
ต่อมา ทำการสร้าง `role` ใน database ด้วยคำสั่งของภาษา SQL
```
 CREATE ROLE backend LOGIN CREATEDB SUPERUSER;
```
แล้วใช้คำสั่ง `\q` เพื่อออกจาก console

ใช้คำสั่ง `cd backend` ที่ terminal เพื่อเข้าไปยังโฟลเดอร์ backend
ติดตั้ง bundle ด้วยคำสั่ง
```
bundle install
```
สร้างฐานข้อมูล ด้วยคำสั่ง
```
 bundle exec rails db:create
```
ทำการ migrate ฐานข้อมูล ด้วยคำสั่ง
```
bundle exec rails db:migrate 
```
จากนั้นทำการ run โปรเจ็กต์ขึ้นมาด้วยคำสั่ง
```
bundle exec rails s -p 4000
```
