import { Img, Txt, Video, makeScene2D } from "@motion-canvas/2d";
import { beginSlide, createRef, waitFor } from "@motion-canvas/core";

import learn from "../videos/yougottalearn.mp4";
import handshake from "../videos/angryAwkwardHandshake.mp4";
import controller from "../videos/controllers.mp4";
import poongko from "../videos/poongko2.mp4";
import evo from "../images/evo.png";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const fgc = createRef<Video>();
  const evoImg = createRef<Img>();
  view.add(
    <>
      <Txt fontSize={120} fill={"ffffff"} ref={title} zIndex={1}>
        Fighting Game Community (FGC)
      </Txt>
      <Img src={evo} ref={evoImg} y={900} />
      <Video ref={fgc} src={learn} y={1100} scale={1.5}  />
    </>
  );
  yield* beginSlide("header");
  title().y(-900)
  fgc().y(0);
  fgc().play();
  yield* waitFor(7)
  yield* beginSlide("handShake");
  fgc().src(handshake);
  fgc().seek(0);
  fgc().play()
  yield* waitFor(9)
  yield* beginSlide("controller");
  fgc().src(controller);
  fgc().seek(0);
  fgc().play()
  yield* waitFor(3)
  yield* beginSlide("poongko");
  fgc().src(poongko);
  fgc().seek(0);
  fgc().play()
  yield* waitFor(26)
  yield* beginSlide("EVO");
  fgc().remove();
  evoImg().y(0);
  evoImg().scale(1.5);
});
