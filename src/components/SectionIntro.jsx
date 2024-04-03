import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";

import "../css/main.css"

const SectionIntro = ({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  sidebarContent,
  ...props
}) => {
  return (
    <Container {...props}>
      <div className="flex justify-between section-intro-responsive">
        <FadeIn className="max-w-2xl">
          <div>
            <h2>
              {eyebrow && (
                <>
                  <span
                    className={clsx(
                      "mb-6 block font-display text-base font-semibold",
                      invert ? "text-white" : "text-neutral-950"
                    )}
                  >
                    {eyebrow}
                  </span>
                  <span className="sr-only"> - </span>
                </>
              )}
              <span
                className={clsx(
                  "block font-display tracking-tight [text-wrap:balance]",
                  smaller
                    ? "text-2xl font-semibold"
                    : "text-4xl font-medium sm:text-5xl",
                  invert ? "text-white" : "text-neutral-950"
                )}
              >
                {title}
              </span>
            </h2>
            {children && (
              <div
                className={clsx(
                  "mt-6 text-xl",
                  invert ? "text-neutral-300" : "text-neutral-600"
                )}
              >
                {children}
              </div>
            )}
          </div>
        </FadeIn>
        {sidebarContent && (
          <div className="services-right-content">
            {sidebarContent}
          </div>
        )}
      </div>
    </Container>
  );
};

export default SectionIntro;
