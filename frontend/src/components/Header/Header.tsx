import { HStack, Link } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import NextLink from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <NavigationBar />
        <h6>Phone number</h6>
      </header>
      <div className={styles.belowHeader} />
    </>
  );
}

function NavigationBar() {
  return (
    <HStack className={styles.NavigationBar} gap={100}>
      <Link as={NextLink} href="/about">
        About Us
      </Link>
      <Link as={NextLink} href="/services">
        Services
      </Link>
      {/* <Link as={NextLink} href="/tarrifs">
        Tarrifs
      </Link> */}
      <Link as={NextLink} href="/contact">
        Contact
      </Link>
    </HStack>
  );
}
