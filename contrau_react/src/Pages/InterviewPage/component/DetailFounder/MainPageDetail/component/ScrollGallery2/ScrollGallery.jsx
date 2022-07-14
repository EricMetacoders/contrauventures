import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import _, { map } from "lodash";
import { createRef } from "react";

const sectionsSetup = [
  {
    name: "javascript",
    icon: "🍏",
    content:
      "Often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
  },
  {
    name: "react",
    icon: "🍉",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.",
  },
  {
    name: "jest",
    icon: "🍍",
    content:
      "JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node.js, React, Angular and Vue.js. It aims to work out of the box and config free.",
  },
  {
    name: "enzyme",
    icon: "🥑",
    content:
      "JavaScript testing framework , created by developers who created react. Jest is not limited to react framework, it is general purpose javascript testing framework. but as it is from react developers more inclination is there. Enzyme is another framework which is specifically designed to test react components",
  },
  {
    name: "webpack",
    icon: "🌶️",
    content:
      "Open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included. Webpack takes modules with dependencies and generates static assets representing those modules.",
  },
];

/**
 * React Hook for listening to (horizontal) drag changes
 */
const useDragExpander = ({ min, max }) => {
  const [dragState, setDragState] = useState(0);
  const initialPos = useRef(0);
  const timer = useRef();

  const update = useCallback(
    (xPos) =>
      setDragState((state) => ({
        ...state,
        delta: initialPos.current - xPos + state.lastDelta,
      })),
    []
  );

  const onDragMouseDown = (e) => {
    if (e.button != 0) return; // only allow left-mouse clicks
    e.preventDefault();
    initialPos.current = e.screenX; // re-set initial position
    timer.current = setTimeout(dragStart, 0, e); // only allow dragging after N duration mouse down
    window.addEventListener("mouseup", unbind);
  };

  const dragStart = (e) => {
    setDragState((state) => ({
      ...state,
      lastDelta: state.delta || 0,
      isDragging: true,
    }));
    window.addEventListener("mousemove", onDragMove);
  };

  const onDragMove = useCallback((e) => update(e.screenX), []);

  const unbind = () => {
    clearTimeout(timer.current);
    window.removeEventListener("mousemove", onDragMove);
    setDragState((state) => ({ ...state, isDragging: false }));
  };

  const limitDragRange = useCallback(
    (delta) => Math.min(max, Math.max(min, delta || 0)),
    []
  );

  return { onDragMouseDown, onDragMove, dragState, limitDragRange };
};

/**
 *
 * @param {Object} scrollParent [DOM node of scrollable element]
 * @param {Array} _targetElements [Array of nodes to spy on]
 */
const spyScroll = (scrollParent, _targetElements) => {
  if (!scrollParent) return false;

  // create an Object with all children that has data-name attribute
  const targetElements =
    _targetElements ||
    [...scrollParent.children].reduce(
      (map, item) =>
        item.dataset.name ? { [item.dataset.name]: item, ...map } : map,
      {}
    );

  let bestMatch = {};

  for (const sectionName in targetElements) {
    if (Object.prototype.hasOwnProperty.call(targetElements, sectionName)) {
      const domElm = targetElements[sectionName];
      const delta = Math.abs(scrollParent.scrollTop - domElm.offsetTop); // check distance from top, takig scroll into account

      if (!bestMatch.sectionName) bestMatch = { sectionName, delta };

      // check which delet is closest to "0"
      if (delta < bestMatch.delta) {
        bestMatch = { sectionName, delta };
      }
    }
  }

  // update state with best-fit section
  return bestMatch.sectionName;
};

/**
 * Given a parent element ref, this render-props function returns
 * which of the parent's sections is currently scrolled into view
 * @param {Object} sectionsWrapperRef [Scrollable parent node React ref Object]
 */
const CurrentScrolledSection = ({ sectionsWrapperRef, children }) => {
  const [currentSection, setCurrentSection] = useState();
  const throttledOnScroll = _.throttle(
    (e) => setCurrentSection(spyScroll(e.target)),
    100
  );

  // adding the scroll event listener inside this component, and NOT the parent component, to prevent re-rendering of the parent component when
  // the scroll listener is fired and the state is updated, which causes noticable lag.
  useEffect(() => {
    const wrapperElm = sectionsWrapperRef.current;
    if (wrapperElm) {
      wrapperElm.addEventListener("scroll", throttledOnScroll);
      setCurrentSection(spyScroll(wrapperElm));
    }

    // unbind
    return () => wrapperElm.removeEventListener("scroll", throttledOnScroll);
  }, []);

  return children(currentSection);
};
function TextInputWithFocusButton(name, sectionsRefs2) {
  sectionsRefs2[name] = useRef();
}
function Aside({ data }) {
  const sectionsWrapperRef = useRef();
  const { onDragMouseDown, dragState, limitDragRange } = useDragExpander({
    min: -50,
    max: 200,
  });

  // prepare DOM refs
  const sectionsRefs = {};

  // data.forEach((section) =>
  //   TextInputWithFocusButton(section.name, sectionsRefs)
  // );

  // data.forEach((section) => (sectionsRefs[section.name] = useRef()));

  // sectionsRefs[data[0].name] = useRef();
  // sectionsRefs[data[1].name] = useRef();
  // sectionsRefs[data[2].name] = useRef();
  // sectionsRefs[data[3].name] = useRef();
  // sectionsRefs[data[4].name] = useRef();

  // console.log("sectionsRefs:", sectionsRefs);

  const scrollToTarget = (refName) => () => {
    if (refName && sectionsRefs[refName] && sectionsRefs[refName].current)
      // MDN: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
      sectionsRefs[refName].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };
  // side section
  const SideSection = useCallback(
    ({ children, name, ...rest }) => (
      <section ref={sectionsRefs[name]} {...rest}>
        {/* <header>{name}</header> */}
        <div className="sideSectionContent">{children}</div>
      </section>
    ),
    []
  );
  const Footer = useCallback(<div>hi</div>, []);
  // render-props method: get currently viewed section while scrolling:
  return (
    <CurrentScrolledSection sectionsWrapperRef={sectionsWrapperRef}>
      {(currentSection) => (
        <aside
          className={`asideComp ${dragState.isDragging ? "isDragging" : ""}`}
          style={{ "--delta": limitDragRange(dragState.delta) }}
        >
          <nav onMouseDown={onDragMouseDown}>
            {data.map((item) => (
              <button
                type="button"
                key={item.name}
                title={_.capitalize(item.name)}
                className={currentSection === item.name ? "active" : ""}
                onClick={scrollToTarget(item.name)}
              >
                {item.icon}
              </button>
            ))}
          </nav>
          <div className="asideContent" ref={sectionsWrapperRef}>
            {data.map((item, index) => (
              <SideSection
                name={item.name}
                data-name={item.name}
                className={currentSection === item.name ? "active" : ""}
              >
                {`${item.name}-`}
                {item.content}

                {index == data.length - 1 && (
                  <div
                    style={{
                      height: "140px",
                      width: "140px",
                      background: "red",
                      marginBottom: "100%",
                    }}
                  >
                    Footer
                  </div>
                )}
              </SideSection>
            ))}
          </div>
        </aside>
      )}
    </CurrentScrolledSection>
  );
}

function ScrollGallery(props) {
  return (
    <main className="main">
      <Aside data={sectionsSetup} />
    </main>
  );
}

export default ScrollGallery;
