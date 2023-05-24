import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

interface ContactCardProps {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly text: string;
  readonly href: string;
}
function ContactCard(props: ContactCardProps) {
  const { children, title, text, href } = props;
  return (
    <div className={clsx("flex", "flex-row", "items-center", "gap-x-[16px]")}>
      <div>{children}</div>
      <div className={clsx("flex", "flex-col")}>
        <div className={clsx("text-[18px]")}>{title}</div>
        <Link href={href} target="_blank">
          <div
            className={clsx(
              "text-[16px]",
              "text-primary",
              "whitespace-nowrap",
              "overflow-hidden"
            )}
          >
            {text}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  return (
    <motion.div
      key={`Welcome`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      }}
      className="w-[80%] lg:w-[60%] h-screen flex justify-center items-center"
    >
      <div
        className={clsx("flex", "flex-col", "gap-y-[120px]", "items-center")}
      >
        <div className={clsx("flex", "items-center", "flex-col")}>
          <Image
            src="/Welcome.png"
            width={300}
            height={300}
            className="aspect-square"
            alt="Welcome emoji"
            priority
          />
          <div className={clsx("text-[36px]", "font-semibold")}>Frank Hsu</div>
          <div className={clsx("text-[20px]")}>Full Stack Developer</div>
        </div>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "justify-start",
            "gap-y-4",
            "lg:flex-row",
            "lg:justify-center",
            "lg:items-center",
            "lg:gap-x-[80px]",
            "xl:gap-x-[120px]"
          )}
        >
          <ContactCard
            title="LinkedIn"
            text="@swh00tw ↗"
            href="https://www.linkedin.com/in/swh00tw"
          >
            <FaLinkedin size={40} />
          </ContactCard>
          <ContactCard
            title="Mail"
            text="a6140000@gmail.com"
            href="mailto:a6140000@gmail.com"
          >
            <RiMailFill size={40} />
          </ContactCard>
          <ContactCard
            title="Github"
            text="@swh00tw ↗"
            href="https://github.com/swh00tw"
          >
            <FaGithub size={40} />
          </ContactCard>
        </div>
      </div>
    </motion.div>
  );
}
