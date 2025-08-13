"use client";

import Hero from "@/components/Hero/Hero";
import InfoCard from "@/features/cards/InfoCard/InfoCard";
import { Button, HStack, VStack } from "@chakra-ui/react";

import styles from "./page.module.css";

export default function Services() {
  return (
    <Hero
      customHeight={"80vh"}
      backgroundClassName={styles.baseBackground}
      background="warehouseBackground.png"
    >
      <h4 className={styles.title}>Our Services</h4>
      <HStack gap={12}>
        <VStack gap={10}>
          <InfoCard
            title="Market Entry Fulfilment"
            description="Expand your business into the UK & EU with ease. We handle everything from customs clearance to local warehousing, so you can focus on growing your brand without the complexities of cross-border trade."
          />
          <Button asChild bg="#FFE100" width={125}>
            <a href="/contact">Request</a>
          </Button>
        </VStack>
        <VStack gap={10}>
          <InfoCard
            title="Amazon FBA Prep & Forwarding"
            description="Simplify your Amazon selling process. From product inspection and labeling to compliant packaging and fast delivery to Amazon fulfillment centers, we ensure your stock arrives ready to sell."
          />
          <Button asChild bg="#FFE100" width={125}>
            <a href="/contact">Request</a>
          </Button>
        </VStack>
        <VStack gap={10}>
          <InfoCard
            title="General Fulfilment"
            description="Reliable storage, packing, and shipping.
Whether you sell on your own store or multiple marketplaces, our team ensures your orders are picked, packed, and shipped quickly to customers across the UK & EU."
          />
          <Button asChild bg="#FFE100" width={125}>
            <a href="/contact">Request</a>
          </Button>
        </VStack>
      </HStack>
    </Hero>
  );
}
