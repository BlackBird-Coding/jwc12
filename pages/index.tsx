import Navbar from "../components/Navbar";
import Image from "next/image";
import map from "../images/map.png";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import user4 from "../images/user4.png";
import markup3 from "../images/markup3.png";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="tw-text-white">
      <Navbar />
      <section className="tw-my-20 tw-px-6">
        <div className="tw-flex tw-justify-center tw-max-w-screen-lg tw-mx-auto">
          <div className="tw-flex tw-flex-col tw-text-center tw-gap-y-4">
            <h1 className="tw-text-6xl">หมอหมึก</h1>
            <h2 className="tw-text-lg tw-max-w-xs lg:tw-max-w-lg">
              ผู้มีประสบการณ์พยากรณ์มากกว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
            </h2>
            <a
              href="https://12.jwc.in.th/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="tw-bg-white tw-mx-auto tw-w-44 tw-p-3 tw-text-xl tw-border-2 tw-text-primary hover:tw-bg-transparent hover:tw-text-white">
                จองคิว
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="tw-my-32 tw-px-6">
        <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-justify-between tw-max-w-screen-lg tw-mx-auto tw-gap-10">
          <div className="tw-flex tw-flex-col tw-max-w-lg tw-text-lg tw-gap-y-4">
            <h1 className="tw-text-4xl">ประวัติหมอหมึก</h1>
            <h2>
              หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์
              ไพ่ทาโร และการดูลายมือ
            </h2>
            <h2>
              ด้วยความสามารถที่หลากหลาย
              ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่บุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
            </h2>
          </div>
          <div className="tw-flex tw-border tw-justify-center tw-mx-auto tw-max-w-sm">
            <Image src={user1} alt="markup" />
          </div>
        </div>
      </section>
      <section className="tw-my-24 tw-px-6">
        <div className="tw-flex tw-flex-col tw-justify-center tw-text-center tw-max-w-screen-lg tw-mx-auto">
          <div>
            <h1 className="tw-text-4xl">รีวิวจากลูกค้า</h1>
          </div>
          <div className="tw-grid tw-grid-flow-col tw-grid-rows-3 md:tw-grid-rows-2 lg:tw-grid-rows-1 tw-gap-4 tw-mt-12 tw-mx-auto">
            <Card
              name="แมทธิว"
              career="นักธุรกิจ"
              image={user4}
              desc="หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลยตอนนี้ขายดีเทน้ำเทท่าเลยครับ"
            />
            <Card
              name="แจ็ค"
              career="นักแสดง"
              image={user2}
              desc="ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะทำนายอะไรไว้แม่นทุกอย่างเลยค่ะ"
            />
            <Card
              name="น้ำใส"
              career="นักศึกษา"
              image={user3}
              desc="ที่หมอหมึกบอกมานะคะเกิดเกือบหมดเลยค่ะถ้าไม่ได้หมอหมึกช่วยไว้ชีวิตคงแย่เลยค่ะดีนะที่ป้องกันเรื่องร้ายๆ ทันเวลา"
            />
          </div>
        </div>
      </section>
      <section className="tw-my-24 tw-px-6">
        <div className="tw-flex tw-justify-between tw-flex-col-reverse lg:tw-flex-row tw-gap-10 tw-max-w-screen-lg tw-mx-auto">
          <div className="tw-flex tw-justify-center tw-border">
            <Image src={map} alt="markup" />
          </div>
          <div className="tw-flex tw-flex-col tw-max-w-md tw-gap-y-4">
            <h1 className="tw-text-4xl">ทำนายดวงชะตากับหมอหมึก</h1>
            <p>
              สามารถจองคิวได้ในเว็บหรือ
              <br />
              อีเมล: octopus_fortune@teller.com
              <br />
              โทรศัพท์: 099 XXXX XXX
              <br />
              และมาที่สำนักที่
              <br />
              ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ
              99999 ตามวันเวลาที่นัดไว้
            </p>
            <p>
              จำกัด 10 คิวต่อหนึ่งวัน เปิดทำการ 10.00-18.30 น. พัก 12.00 - 13.00
              เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
