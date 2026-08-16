import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};

// Intro de marca de ejemplo para Urbanizadora y Desarrolladora California.
// Sirve como punto de partida: reemplaza el texto, colores o duración
// para crear tus propios videos con Remotion.
export const MyComponent: React.FC<Props> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const nameSpring = spring({ frame, fps, config: { damping: 200 } });
  const nameOpacity = interpolate(nameSpring, [0, 1], [0, 1]);
  const nameY = interpolate(nameSpring, [0, 1], [20, 0]);

  const lineWidth = interpolate(frame, [25, 55], [0, 160], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const taglineOpacity = interpolate(frame, [45, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame, [45, 70], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="items-center justify-center bg-[#1A1917]">
      <Sequence from={0}>
        <h1
          style={{ opacity: nameOpacity, transform: `translateY(${nameY}px)` }}
          className="text-center text-6xl font-semibold tracking-tight text-[#F6F2EA]"
        >
          Urbanizadora y Desarrolladora California
        </h1>
      </Sequence>

      <div
        style={{ width: lineWidth }}
        className="my-8 h-[2px] bg-[#B08A54]"
      />

      <Sequence from={45}>
        <p
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
          }}
          className="text-center text-2xl text-[#E7DECB]"
        >
          Transformamos tierra en proyectos con valor patrimonial.
        </p>
      </Sequence>
    </AbsoluteFill>
  );
};
