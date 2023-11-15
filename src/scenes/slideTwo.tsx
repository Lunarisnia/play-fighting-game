import { Img, Txt, makeScene2D } from "@motion-canvas/2d";
import { all, beginSlide, createRef, waitFor } from "@motion-canvas/core";

import tc from "../images/tChar.jpeg";
import jin from "../images/jin.png";
import king from "../images/king.png";
import ryu from "../images/ryu.png";
import sol from "../images/sol.png";
import alisa from "../images/alisa.png";
import heihachi from "../images/heihachi.jpg";
import chloe from "../images/chloe.png";
import kuma from "../images/kuma.jpg";
import marisa from "../images/marisa.png";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  view.add(
    <Txt fontSize={200} fill={"ffffff"} ref={title} zIndex={1}>
      Picking Characters
    </Txt>
  );
  yield* beginSlide("Header");
  title().text("");
  const tChar = createRef<Img>();
  view.add(<Img zIndex={1} scale={1.5} src={tc} ref={tChar} />);
  yield* beginSlide("So how?");
  tChar().src(jin);
  yield* beginSlide("So how?2");
  tChar().scale(2.5);
  tChar().src(king);
  yield* beginSlide("So how?3");
  tChar().scale(0.8);
  tChar().src(ryu);
  yield* beginSlide("So how?3.5");
  tChar().scale(0.6);
  tChar().src(marisa);
  yield* beginSlide("So how?4");
  tChar().scale(0.4);
  tChar().src(sol);
  yield* beginSlide("So how?5");
  tChar().scale(0.5);
  tChar().src(alisa);
  yield* beginSlide("So how?6");
  tChar().scale(0.5);
  tChar().src(heihachi);
  yield* beginSlide("So how?7");
  tChar().scale(2);
  tChar().src(chloe);
  yield* beginSlide("So how?8");
  tChar().scale(0.23);
  tChar().src(kuma);
  yield* beginSlide("So how?9");
  tChar().remove();
  title().text("So who do I pick?");

  yield* beginSlide("FGC");
});
