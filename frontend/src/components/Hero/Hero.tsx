import { mergeClasses } from "@fluentui/react-components";

import styles from "./Hero.module.css";

type Props = {
  background?: string;
  backgroundClassName?: string;
  children: React.ReactNode;
  customHeight?: string;
  className?: string;
};

export default function Hero({
  background,
  backgroundClassName,
  children,
  customHeight,
  className,
}: Readonly<Props>) {
  return (
    <section
      className={mergeClasses(styles.hero, backgroundClassName)}
      style={{
        backgroundImage: `url(${background})`,
        minHeight: `${customHeight}`,
      }}
    >
      <div className={mergeClasses(styles.children, className)}>{children}</div>
    </section>
  );
}
