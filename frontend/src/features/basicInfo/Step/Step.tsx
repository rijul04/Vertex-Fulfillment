import { VStack } from "@chakra-ui/react";
import Image from "next/image";

import styles from "./Step.module.css";

type Props = {
  number: string; // string as passing in 0x is not happy having the 0 before it
  title: string;
  image: string;
  description: string;
};

export default function Step({
  number,
  title,
  image,
  description,
}: Readonly<Props>) {
  return (
    <VStack className={styles.container}>
      <p className={styles.stepNum}>{number}</p>
      <p className={styles.title}>{title}</p>
      <Image src={image} alt={"Step"} width={200} height={120} />
      <p className={styles.description}>{description}</p>
    </VStack>
  );
}
