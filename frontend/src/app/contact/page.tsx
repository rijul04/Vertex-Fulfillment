"use client";

import Hero from "@/components/Hero/Hero";
import { BaseContactForm2 } from "@/features/forms/BaseContactForm/BaseContactForm";

import styles from "./page.module.css";
import { VStack } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Hero customHeight="90vh" backgroundClassName={styles.contactForm}>
      <VStack paddingTop={"6rem"} paddingBottom={"2rem"}>
        <h6 className={styles.contactTitle}>Get in touch</h6>
        <p className={styles.contactDescription}>
          Let’s make UK & EU selling simple, fast, and scalable — together.
        </p>
      </VStack>
      <BaseContactForm2 />
    </Hero>
  );
}
