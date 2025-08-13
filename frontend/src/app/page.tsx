"use client";

import Hero from "@/components/Hero/Hero";

import styles from "./page.module.css";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import InfoCard from "@/features/cards/InfoCard/InfoCard";
import Step from "@/features/basicInfo/Step/Step";
import { GlobeLocationRegular } from "@fluentui/react-icons";
import IconDescription from "@/features/basicInfo/IconDescription/IconDescription";
import Image from "next/image";
import { BaseContactForm2 } from "@/features/forms/BaseContactForm/BaseContactForm";

export default function Home() {
  return (
    <>
      <section className={styles.base}>
        <Hero
          background={"/warehouseBackground.png"}
          backgroundClassName={styles.baseBackground}
          customHeight={"80vh"}
          className={styles.base}
        >
          <h2>Vertex Fulfilment</h2>
          <h3>UK/EU Fulfilment & Growth Logistics</h3>
          <h4>
            — Store, ship, and scale your business in the UK/EU from market
            testing to Amazon FBA.
          </h4>
        </Hero>
      </section>
      <section className={styles.serviceDescription}>
        <Hero customHeight={"80vh"}>
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
      </section>
      <section>
        <Hero className={styles.steps}>
          <h4>Steps</h4>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={16}
          >
            <GridItem>
              <Step
                number={"01"}
                title={"Ship Inventory to Us"}
                image={"/shipping.png"}
                description={"Send small or bulk shipments to us in the UK."}
              />
            </GridItem>
            <GridItem>
              <Step
                number={"02"}
                title={"We Store & Fulfill"}
                image={"/storage.png"}
                description={"Fast, local order processing."}
              />
            </GridItem>
            <GridItem>
              <Step
                number={"03"}
                title={"Track & Manage"}
                image={"/dashboard.png"}
                description={"Simple dashboard & updates."}
              />
            </GridItem>
            <GridItem rowStart={2} colStart={2}>
              <Step
                number={"04"}
                title={"Scale Up"}
                image={"/scale.png"}
                description={"Move to FBA or high-volume fulfillment."}
              />
            </GridItem>
          </Grid>
        </Hero>
      </section>
      <section>
        <Hero
          backgroundClassName={styles.chooseUsBackground}
          className={styles.chooseUs}
        >
          <VStack>
            <h4>Why choose us?</h4>
            <p>
              Our goal is to bring value to our client through high quality
              services
            </p>
            {/* meed to change minChildWidth to match sizing for auto resizing +extra for smaller screen sizes tho */}
            <SimpleGrid columns={3} columnGap={"28px"} rowGap={"25px"}>
              <IconDescription
                icon={GlobeLocationRegular}
                title={"UK-Based & Trusted"}
                description={
                  "Operate with confidence knowing your products are handled in our UK-based facilities, backed by years of experience and trusted by sellers worldwide."
                }
              />
              <IconDescription
                icon={GlobeLocationRegular}
                title={"Start Small, Scale Anytime"}
                description={
                  "Whether you’re testing the market or ready for full-scale operations, our flexible services let you grow at your own pace without unnecessary commitments."
                }
              />
              <IconDescription
                icon={GlobeLocationRegular}
                title={"No VAT Needed (for initial testing)"}
                description={
                  "Test the UK and EU markets without the immediate VAT setup, making it faster and easier to get your products in customers’ hands."
                }
              />
              <IconDescription
                icon={GlobeLocationRegular}
                title={"Reliability and Fast Shipping"}
                description={
                  "We pride ourselves on dependable storage, accurate order fulfillment, and fast delivery—keeping your customers satisfied and your business moving."
                }
              />
              <IconDescription
                icon={GlobeLocationRegular}
                title={"Security"}
                description={
                  "Your inventory is stored in secure, monitored facilities, giving you peace of mind that your products are safe at all times."
                }
              />
              <IconDescription
                icon={GlobeLocationRegular}
                title={"Personalised Support"}
                description={
                  "Our dedicated team provides tailored assistance to meet your business needs, from onboarding to ongoing operations."
                }
              />
            </SimpleGrid>
          </VStack>
        </Hero>
      </section>
      <section>
        <Hero
          customHeight="40vh"
          backgroundClassName={styles.contactFormBackground}
          className={styles.contactForm}
        >
          <VStack paddingTop={"6rem"} paddingBottom={"2rem"}>
            <h6 className={styles.contactTitle}>Get in touch</h6>
            <p className={styles.contactDescription}>
              Let’s make UK & EU selling simple, fast, and scalable — together.
            </p>
          </VStack>
          <BaseContactForm2 />
        </Hero>
      </section>
      <section>
        <div className={styles.mapData}>
          <HStack gapX={20}>
            <figure>
              <Image
                src={"/exampleMap.png"}
                alt={"Example Map"}
                className={styles.mapDataImage}
                width={719}
                height={501}
              />
            </figure>
            <div className={styles.mapDataContacts}>
              <h5>Our contacts</h5>
              <h6>Telephone:</h6>
              <h6>Email:</h6>
              <h6>Address:</h6>
            </div>
          </HStack>
        </div>
      </section>
    </>
  );
}
