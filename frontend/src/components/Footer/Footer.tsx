import { HStack, Icon, Link, VStack } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Copyright } from "./copyright";
import Logo from "../Logo/Logo";

import styles from "./Footer.module.css";

export default function Footer2() {
  return (
    <footer className={styles.footer}>
      <HStack justify="space-around">
        <VStack align="start">
          <Logo />
          <Copyright />
        </VStack>
        <HStack gapX={10}>
          {socialLinks.map(({ href, icon }, index) => (
            <Link key={index} href={href} colorPalette="gray">
              <Icon size="md">{icon}</Icon>
            </Link>
          ))}
        </HStack>
      </HStack>
    </footer>
  );
}

const socialLinks = [
  { href: "https://x.com", icon: <SiX /> },
  { href: "https://github.com", icon: <SiGithub /> },
  { href: "https://www.linkedin.com", icon: <SiLinkedin /> },
];
