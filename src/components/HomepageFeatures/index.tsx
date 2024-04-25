import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/images/undraw_gaming_easy-to-use.svg').default,
    description: (
      <>
        Similar to the suspend mode on consoles, easily suspend and resume your
        PC games with the push of a button.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/images/undraw_monitor_powerful.svg').default,
    description: (
      <>
        Suspend and resume your games with a hotkey for the active window or for
        specific applications, the friendly Material GUI, or the CLI interface.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/images/undraw_love_it_open-source.svg').default,
    description: (
      <>
        Open source software that is free to use and modify, with no ads, no
        telemetry, and no data collection.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
