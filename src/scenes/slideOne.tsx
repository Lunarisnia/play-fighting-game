import { Img, Txt, Video, makeScene2D } from "@motion-canvas/2d";
import { all, beginSlide, createRef, waitFor } from "@motion-canvas/core";
import sfOne from "../images/sf1.jpeg";
import fgs from "../videos/fgs.mp4";
import sfProtour from "../videos/sf6protour.mp4";
import t7 from "../videos/tekken7.mp4";
import gg from "../videos/ggst.mp4";

import sf6 from "../images/sf6.jpg";
import ggstImg from "../images/ggst.jpeg";
import tekken7 from "../images/tekken7.jpg";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const image = createRef<Img>();
  view.add(
    <>
      <Txt fill={"ffffff"} ref={title} y={-400}>
        Street Fighter (1987)
      </Txt>
      <Img src={sfOne} ref={image} />
    </>
  );
  yield* beginSlide("Slide One");
  const fgVid = createRef<Video>();
  view.add(
    <>
      <Video ref={fgVid} src={fgs} play height={3000} y={-950} />
    </>
  );
  yield* waitFor(2.6);

  yield* beginSlide("Slide Two");
  title().text("Which game to play?");
  image().remove();
  fgVid().remove();
  yield* all(title().y(0, 1), title().fontSize(100, 1));
  yield* beginSlide("Street Fighter");
  yield* title().y(-400, 1);
  const tekken = createRef<Img>();
  const ggst = createRef<Img>();
  const sf = createRef<Img>();
  const sfVid = createRef<Video>();
  const tekkenVid = createRef<Video>();
  const ggstVid = createRef<Video>();
  view.add(
    <>
      <Img src={sf6} ref={sf} height={600} y={900} />
      <Video ref={sfVid} y={900} src={sfProtour} scale={0.9} />
      <Img src={tekken7} ref={tekken} height={600} y={900} />
      <Video ref={tekkenVid} y={900} src={t7} scale={0.9} />
      <Img src={ggstImg} ref={ggst} height={600} y={900} />
      <Video ref={ggstVid} y={1100} src={gg} scale={0.9} />
    </>
  );
  yield* all(sf().y(0, 1), title().text("Street Fighter 6", 1));
  sfVid().play();
  yield* all(
    title().x(-9, 1),
    sf().position([-500, -400], 1),
    sf().scale(0.4, 1),
    sfVid().y(100, 1)
  );
  yield* waitFor(15);
  sfVid().pause();
  yield* beginSlide("Tekken 7");
  tekkenVid().play();
  yield* all(
    title().x(0, 1),
    title().text("Tekken 7", 1),
    sf().position([0, 900], 1),
    tekken().position([-400, -430], 1),
    tekken().scale(0.3, 1),
    tekkenVid().y(0, 1),
    sf().scale(1, 1),
    sfVid().y(900, 1)
  );
  yield* waitFor(16);
  tekkenVid().pause();
  yield* beginSlide("Guilty Gear Strive");
  ggstVid().play();
  yield* all(
    title().x(100, 1),
    title().text("Guilty Gear Strive", 1),
    tekken().position([0, 900], 1),
    tekken().scale(1, 1),
    tekkenVid().y(900, 1),
    ggst().position([-400, -430], 1),
    ggst().scale(0.3, 1),
    ggstVid().y(100, 1),
    ggstVid().scale(0.7, 1)
  );
  yield* waitFor(23);
  ggstVid().pause();
  yield* beginSlide("Fighting games");
  tekken().position([1300, 0]);
  yield* all(
    title().x(0, 1),
    title().text("Fighting Games", 1),
    ggst().position([-600, 0], 1),
    sf().position([0, 0], 1),
    tekken().position([600, 0], 1),
    ggst().scale(1, 1),
    ggstVid().y(1100, 1),
    ggstVid().scale(1, 1)
  );
  yield* beginSlide("S2");
});
