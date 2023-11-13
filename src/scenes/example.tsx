import { Line, Path, Rect, Txt, Video, makeScene2D } from "@motion-canvas/2d";
import {
  Vector2,
  all,
  beginSlide,
  createRef,
  createSignal,
  delay,
  waitFor,
} from "@motion-canvas/core";
import footsies from "../videos/footsies.mp4";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  view.add(
    <Txt fontSize={200} fill={"ffffff"} ref={title} zIndex={1}>
      FIGHTING GAMES
    </Txt>
  );
  yield* beginSlide("Header");
  yield* all(
    title().y(-400, 1),
    title().text("99", 0.5),
    title().fontSize(100, 1)
  );

  const p1Health = createRef<Line>();
  const p2Health = createRef<Line>();
  const footsiesPlayer = createRef<Video>();
  view.add(
    <>
      <Line
        ref={p1Health}
        closed
        arrowSize={10}
        points={[
          [0, 0],
          [0, 100],
          [0, 100],
          [0, 0],
        ]}
        y={-461}
        x={-70}
        fill={"ffffff"}
        zIndex={1}
      ></Line>
      <Line
        ref={p2Health}
        closed
        arrowSize={10}
        points={[
          [0, 0],
          [0, 100],
          [0, 100],
          [0, 0],
        ]}
        y={-461}
        x={70}
        fill={"ffffff"}
        zIndex={1}
      ></Line>
      <Video ref={footsiesPlayer} src={footsies} scale={1} height={0} />
    </>
  );
  yield* beginSlide("Health bar");
  footsiesPlayer().play();
  yield* all(
    p1Health().points(
      [
        [0, 0],
        [0, 100],
        [-800, 100],
        [-800, 0],
      ],
      1
    ),
    p2Health().points(
      [
        [0, 0],
        [0, 100],
        [800, 100],
        [800, 0],
      ],
      1
    ),
    footsiesPlayer().height(1000, 1)
  );
  yield* delay(
    2.1,
    p2Health().points(
      [
        [0, 0],
        [0, 100],
        [400, 100],
        [400, 0],
      ],
      0
    )
  );
  yield* delay(
    0.5,
    p2Health().points(
      [
        [0, 0],
        [0, 100],
        [0, 100],
        [0, 0],
      ],
      2.5
    )
  );
  yield* waitFor(1.5);
});
