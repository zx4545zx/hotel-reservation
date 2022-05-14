# Hotel Reservation
ระบบการจองห้องประชุมภายในโรงแรม + ห้องพัก

- พนักงาน หรือ แอดมิน
1. มีระบบพนักงาน สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
2. สามารถแสดงสถานะการใช้งานของพนักงานได้
3. มีการจัดการสิทธิ์การเข้าถึงของพนักงาน

- ห้องประชุม
1. มีระบบการจัดการ ห้องประชุม สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
2. มีระบบการจัดการ อุปกรณ์ของห้องประชุม  สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
3. มีระบบการจัดการ บริการของห้องประชุม  สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
5. สามารถตรวจสถานะของห้องประชุมได้

- ห้องพัก
1. มีระบบการจัดการ ห้องพัก สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
2. มีระบบการจัดการ อุปกรณ์ของห้องพัก  สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
3. มีระบบการจัดการ บริการหลักของห้องพัก สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
4. มีระบบการจัดการ บริการเสริมของห้องพัก สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
5. มีระบบการจัดการ ประเภทเตียงของห้องพัก สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
6. สามารถตรวจสถานะของห้องพักได้
7. มีระบบการจัดการ วิวของห้องพัก สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้

- แพ็คเกจ
1. มีระบบการจัดการ แพ็คเกจห้องพัก ห้องประชุม และส่วนลด สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้

- การจอง
1. พนักงาน และลูกค้าสามารถจอง ห้องพักได้
2. พนักงานสามารถจอง ห้องประชุม และเพิ่มห้องพักในการจองห้องประชุมได้
3. สามารถ ออกเลขติดตามการจอง ให้ลูกค้าได้
4. มีระบบการจัดการ การจอง สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
5. ระบบสามารถจัดการ คิวการจองได้

- ใบเสนอราคา
1. มีระบบการจัดการ ใบเสนอราคา  สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
2. หัวหน้าพนักงานสามารถ อนุมัต หรือไม่อนุมัต ใบเสนอราคาได้
3. สามารถย้อนกลับมาใช้ใบเสนอราคา ใบเดิมได้

- ลูกค้า
1. มีระบบเก็บข้อมูลลูกค้า สามารถ แสดงผล, เพิ่ม, ลบ และแก้ไข ได้
2. ลูกค้าสามารถติดตามสถานะการจองได้
3. ลูกค้าสามารถส่งสลิปยืนยันการชำระเงินให้พนักงานได้
4. ลูกค้าสามารถติดตามสถานะใบเสนอราคาได้

## mockup
เราจะใช้ [Figma](https://www.figma.com/file/VXLAOMEa6USKYWAXqOOgag/Untitled?node-id=0%3A1) ในการทำ mockup เพราะ figma เป็น web base จึงง่ายต่อการทำงานเป็นทีม

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
- moment.js ( https://momentjs.com/ ) Parse, validate, manipulate, and display dates and times.
- flatpickr.js ( https://flatpickr.js.org/ ) is a lightweight and powerful datetime picker.
- Framer Motion ( https://www.framer.com/motion/ ) A production-ready motion library for React.
- Omise ( https://www.omise.co/th/thailand ) ระบบรับชำระเงินออนไลน์สำหรับอีคอมเมิร์ซ.
- emailjs ( https://www.emailjs.com/ ) Send Email Directly From JavaScript.
- Uppy ( https://uppy.io/ ) Sleek, modular open source JavaScript file uploader.

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

เปิด browser ขึ้นมา เข้าไปยัง url ที่ `http://localhost:3000/`

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

เปิด browser ขึ้นมา เข้าไปยัง url ที่ `http://localhost:4000/`
