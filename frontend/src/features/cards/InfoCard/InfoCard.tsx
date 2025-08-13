import { Card, Separator } from "@chakra-ui/react";
import styles from "./InfoCard.module.css";

type Props = {
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: Readonly<Props>) {
  return (
    <Card.Root
      bg="white"
      variant="elevated"
      color={"black"}
      padding={6}
      minH={420}
      width={300}
    >
      <Card.Body gap="2">
        <Card.Title mt="2" className={styles.title}>
          {title}
        </Card.Title>
        <Separator />
        <Card.Description className={styles.description}>
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
