import { Box, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const photos = ["/IMAGE_1.png", "/IMAGE_2.png", "/IMAGE_3.png"];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      <Image
        src={photos[index]}
        alt={`Slide ${index}`}
        w="100%"
        h="400px"
        objectFit="cover"
        borderRadius="md"
      />
    </Box>
  );
}
