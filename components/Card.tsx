import Image, { StaticImageData } from "next/image";
export default function Card({
  name,
  career,
  desc,
  image,
}: {
  name: string;
  career: string;
  desc: string;
  image: StaticImageData;
}) {
  return (
    <>
      <div className="tw-max-w-sm">
        <div className="tw-border-2 tw-rounded-full tw-relative tw-w-48 tw-h-48 tw-overflow-hidden tw-mx-auto">
          <Image src={image} alt="markup" objectFit="cover" layout="fill" />
        </div>
        <div>
          <h2 className="tw-text-3xl tw-pt-4">
            {name} {career}
          </h2>
          <p className="tw-pt-4">{desc}</p>
        </div>
      </div>
    </>
  );
}
