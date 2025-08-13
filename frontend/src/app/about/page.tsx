"use client";

import Hero from "@/components/Hero/Hero";
import { HStack, VStack } from "@chakra-ui/react";

import styles from "./page.module.css";
import Carousel from "@/features/image/Carousel/Carousel";

export default function About() {
  return (
    <>
      <Hero
        customHeight="80vh"
        backgroundClassName={styles.aboutUsBackground}
        className={styles.aboutUs}
      >
        <HStack justify="space-between">
          <VStack maxW="60%" align="start">
            <h5>About Us</h5>
            <p>
              At Vertex Fulfillment, we help global sellers bring their products
              to the UK and EU markets — without the usual complexity and
              upfront costs. Founded with the mission to make international
              selling simple, affordable, and scalable, we offer a complete
              fulfillment service that supports you from market testing to
              full-scale operations. Whether you’re an e-commerce entrepreneur
              testing your first products or an established brand expanding into
              Europe, we provide the storage, shipping, and support you need to
              succeed. We’re more than just a warehouse — we’re your local
              logistics partner. From receiving and storing your inventory, to
              packing and delivering orders, to preparing products for Amazon
              FBA, we make selling in the UK and EU easy, even if you’re based
              thousands of miles away. Our flexible approach means you can start
              small, keep costs low, and grow at your own pace — all while
              benefiting from fast local delivery, clear communication, and our
              commitment to your success. Vertex Fulfillment — Your gateway to
              the UK & EU market.
            </p>
          </VStack>

          <Carousel />
        </HStack>
      </Hero>
      <div className={styles.chevronWrapper}>
        <div className={styles.chevron} />
      </div>
    </>
  );
}

// function Images() {
//   return (
//     <>
//       <div style={{ position: "absolute", top: "28%", left: 0, width: "40%" }}>
//         <Image
//           src="/IMAGE_1.png"
//           alt="Warehouse worker"
//           width={278}
//           height={174}
//           priority
//           style={{ transform: "scale(1.8)", transformOrigin: "center" }}
//         />
//       </div>
//       <div
//         style={{ position: "absolute", top: "38%", right: "10%", width: "34%" }}
//       >
//         <Image
//           src="/IMAGE_3.png"
//           alt="Shelves"
//           width={174}
//           height={209}
//           style={{ transform: "scale(1.12)", transformOrigin: "center" }}
//         />
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-14%",
//           left: "18%",
//           width: "64%",
//         }}
//       >
//         <Image
//           src="/IMAGE_2.png"
//           alt="Interior"
//           width={266}
//           height={359}
//           style={{ transform: "scale(1.12)", transformOrigin: "center" }}
//         />
//       </div>
//     </>
//   );
// }
