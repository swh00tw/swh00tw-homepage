import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import VictoryGesture from "@/public/victorygesture.svg";

const GestureImage = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="relative" {...props}>
      <Image
        src={VictoryGesture}
        alt="Victory Gesture"
        priority
        quality={100}
      />
    </div>
  );
};

function ContactItem(props: {
  readonly platform: string;
  readonly href: string;
  readonly content: string;
}) {
  const { platform, href, content } = props;
  return (
    <div>
      {`${platform}: `}
      <Link href={href} target="_blank">
        <span className="hover:underline font-medium text-primary">
          {content}
        </span>
      </Link>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div
      className={clsx(
        "w-screen",
        "h-[100lvh]",
        "flex",
        "justify-center",
        "pt-[18vh]",
        "md:pt-[25vh]",
        "lg:pt-0",
        "overflow-hidden",
        "relative"
      )}
    >
      <div
        className={clsx(
          "flex",
          "flex-col",
          "lg:flex-row",
          "w-[100%]",
          "lg:w-[60%]",
          "lg:justify-between",
          "items-center"
        )}
      >
        <div
          className={clsx(
            "mb-[120px]",
            "lg:mb-0",
            "w-[80%]",
            "lg:w-[65%]",
            "lg:pl-[5%]"
          )}
        >
          <div className={clsx("text-[30px]", "font-semibold")}>Contact me</div>
          <p className="py-7">
            Thanks for visiting! Hope you find something here interesting.
            <br /> Feel free to reach out to me!
          </p>
          <div className={clsx("flex", "flex-col")}>
            <ContactItem
              platform="Email"
              href="mailto:a6140000@gmail.com"
              content="a6140000@gmail.com"
            />
            <ContactItem
              platform="Github"
              href="https://github.com/swh00tw"
              content="github.com/swh00tw"
            />
            <ContactItem
              platform="LinkedIn"
              href="https://linkedin.com/in/swh00tw"
              content="linkedin.com/in/swh00tw"
            />
          </div>
        </div>
        <div
          className={clsx(
            "flex",
            "justify-center",
            "absolute",
            "lg:static",
            "w-[150%]",
            "lg:w-[30%]",
            "h-[500px]",
            "lg:h-auto",
            "bottom-[-220px]",
            "md:bottom-[-150px]",
            "bg-[#9FAFDF50]",
            "lg:bg-transparent",
            "rounded-gestureSvg"
          )}
        >
          <Image
            src="/Contact.png"
            width={200}
            height={253}
            alt="contact me"
            className={clsx("hidden", "lg:block")}
          />
          <GestureImage className="lg:hidden w-[275px] h-[396px]" />
        </div>
      </div>
    </div>
  );
}
